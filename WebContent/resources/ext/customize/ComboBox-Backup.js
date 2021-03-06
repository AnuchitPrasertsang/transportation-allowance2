Ext.namespace('Ext.ss.form');
Ext.QuickTips.init();
Ext.ss.form.ComboBox = Ext.extend(Ext.form.ComboBox , {
	  descriptionWidth:undefined
	, showDescription:true
	, descriptionField:undefined
	, descriptionId:undefined
	, descriptionName:undefined
	, descriptionStyle:undefined
	, headerCode:'Code'
	, headerDescription:'Description'
	, listWidth:undefined
	, useOriginalTpl : false
	, onRender : function(ct, position) {
		this.displayField = Ext.value(this.displayField,this.valueField);
		this.descriptionField = Ext.value(this.descriptionField,this.displayField);
        if(this.hiddenName && !Ext.isDefined(this.submitValue)){
            this.submitValue = false;
        }
        Ext.form.ComboBox.superclass.onRender.call(this, ct, position);
        if(this.hiddenName){
            this.hiddenField = this.el.insertSibling({tag:'input', type:'hidden', name: this.hiddenName,
                    id: (this.hiddenId||this.hiddenName)}, 'before', true);
        }
        if(Ext.isGecko){
            this.el.dom.setAttribute('autocomplete', 'off');
        }
	}
	, afterRender : function(ct){
		Ext.form.ComboBox.superclass.afterRender.call(this);
		var descriptionWidth = 250;
		if(this.showDescription) {
	    	this.descriptionStyle = this.descriptionStyle || {};
	    	if(typeof descriptionStyle == "string"){
	    		var cssRe = /([a-z0-9-]+)\s*:\s*([^;\s]+(?:\s*[^;\s]+)*);?/gi,matches;
                while((matches = cssRe.exec(styles))){
                    this.descriptionStyle[matches[1]]=matches[2];
                }
            }
	    	Ext.applyIf(this.descriptionStyle,{'margin-left':'20px'});
	    	this.descriptionId = Ext.value(this.descriptionId,this.id+'-combobox-descfield');
	    	this.descriptionName = Ext.value(this.descriptionName,this.descriptionId);
	    	this.desctextfield = new Ext.form.TextField({
		    	renderTo:this.wrap.id,
	    		id:this.descriptionId,
	    		name:this.descriptionName,
		    	style:this.descriptionStyle,
		    	tabIndex : -1,
		    	readOnly:true
		    });
		    this.renderedDesc = true;
	    	if(!this.descriptionWidth) {
	    		var length = ct.getComputedWidth()- ct.getPadding('l') - this.wrap.getComputedWidth();
	    		descriptionWidth = (length-this.desctextfield.el.getMargins('l')) + this.el.getMargins('l');
	    		this.desctextfield.setWidth(descriptionWidth);
	    	} else {
	    		descriptionWidth = this.descriptionWidth + 10;
	    		this.desctextfield.setWidth(descriptionWidth); // adjust for rms lot 1.
	    	}
	    }
	    if(!this.listWidth) {
	    	this.autoListWidth = true;
	    	if(this.showDescription) {
	    		this.listWidth = this.wrap.getComputedWidth() + this.desctextfield.el.getMargins('l') + descriptionWidth - this.trigger.getComputedWidth();
	    	} else {
	    		this.listWidth = 250;
	    	}
	    }
	    this.initTpl();
	    
		if(!this.lazyInit){
            this.initList();
        }else{
            this.on('focus', this.initList, this, {single: true});
        }
	}
	, initTpl : function() {
		if(this.useOriginalTpl) {
			var cls = 'x-combo-list';
	    	this.tpl = new Ext.XTemplate('<tpl for="."><div class="'+cls+'-item">{' + this.displayField + '}</div></tpl>');
	    } else {
	    	/**var TextMetricsUtils = Ext.util.TextMetrics.createInstance(Ext.getBody());      
	        var descListWidth = Math.floor(this.listWidth * 0.7);**/
	        this.title = this.title ||
	          '<table cellspacing="0" cellpadding="0" border="0" style="width:100%;table-layout:fixed;">'+
	                '<tr style="height:15px;">'+
	                	'<th style="width:30%;"><div class="x-grid3-cell-inner" style="padding:0; font-weight:bold; text-align:center;">'+this.headerCode+'</div></th>'+
	                	'<th style="width:70%;"><div class="x-grid3-cell-inner" style="padding:0; font-weight:bold; text-align:center;">'+this.headerDescription+'</div></th>'+
	                '</tr>'+
	          '</table>';
	        if(!this.tpl) {
	        	this.autoTpl = true;
	        	this.tpl = new Ext.XTemplate(
					'<div style="width:100%;">',
		  				'<tpl for=".">',
	      					'<div class="x-combo-list-item" ext:qtip="{'+this.descriptionField+'}">',
		      					'<table cellspacing="0" cellpadding="0" border="0" style="width:100%;table-layout:fixed;">',
		            				'<tr>',
			            				'<td style="width:30%"><div class="x-grid3-cell-inner" style="padding:0">{' + this.displayField + '}</div></td>',
			            				'<td style="width:70%"><div class="x-grid3-cell-inner" style="padding:0">{' + this.descriptionField + '}</div></td>',
									'</tr>',
								'</table>',
							'</div>',
						'</tpl>',
					'</div>', {
		                compiled: true,
		                disableFormats: true
		            }
		        );
		        /**
		        this.tpl = new Ext.XTemplate(
					'<div style="width:100%;">',
		  				'<tpl for=".">',
		  					'<tpl if="this.getTextWidth('+this.descriptionField+') &lt; '+(descListWidth)+'">',
		      					'<div class="x-combo-list-item">',
			      					'<table cellspacing="0" cellpadding="0" border="0" style="width:100%;table-layout:fixed;">',
			            				'<tr>',
				            				'<td style="width:30%"><div class="x-grid3-cell-inner" style="padding:0">{' + this.displayField + '}</div></td>',
				            				'<td style="width:70%"><div class="x-grid3-cell-inner" style="padding:0">{' + this.descriptionField + '}</div></td>',
										'</tr>',
									'</table>',
								'</div>',
							'</tpl>',
							'<tpl if="this.getTextWidth('+this.descriptionField+') &gt;= '+(descListWidth)+'">',
								'<div class="x-combo-list-item" ext:qtip="{'+this.descriptionField+'}">',
			      					'<table cellspacing="0" cellpadding="0" border="0" style="width:100%;table-layout:fixed;">',
			            				'<tr>',
				            				'<td style="width:30%"><div class="x-grid3-cell-inner" style="padding:0">{' + this.displayField + '}</div></td>',
				            				'<td style="width:65%"><div class="x-grid3-cell-inner" style="padding:0">{' + this.descriptionField + '}</div></td>',
				            				'<td style="width:10px;padding:0 0 0 2px;"><div>...</div></span>',
										'</tr>',
									'</table>',
								'</div>',
							'</tpl>',
						'</tpl>',
					'</div>', {
		                compiled: true,
		                disableFormats: true,
		                getTextWidth: function(text){
		                    return TextMetricsUtils.getWidth(text);
		                }
		            }
		        );
		        */
	        }
	    }
	}
	, onResize : function(w, h){
        Ext.form.ComboBox.superclass.onResize.apply(this, arguments);
        this.resizeDescription();
        if(!isNaN(w) && this.isVisible() && this.list){
            this.doResize(w);
        }else{
            this.bufferSize = w;
        }
    }
    , doResize: function(w){
        if(!Ext.isDefined(this.listWidth)){
            var lw = Math.max(w, this.minListWidth);
            this.list.setWidth(lw);
            this.innerList.setWidth(lw - this.list.getFrameWidth('lr'));
        }
    }
    , resizeDescription : function() {
    	if(this.renderedDesc) {
    		var descriptionWidth = 250;
	    	if(!this.descriptionWidth) {
	    		var length = this.container.getComputedWidth()- this.container.getPadding('l') - this.wrap.getComputedWidth();
	    		descriptionWidth = (length-this.desctextfield.el.getMargins('l')) + this.el.getMargins('l');
	    		this.desctextfield.setWidth(descriptionWidth);
	    	} else {
	    		descriptionWidth = this.descriptionWidth + 10;
	    		this.desctextfield.setWidth(descriptionWidth); // adjust for rms lot 1.
	    	}
	    	
	    	if(this.autoListWidth) {
		    	if(this.showDescription) {
		    		this.listWidth = this.wrap.getComputedWidth() + this.desctextfield.el.getMargins('l') + descriptionWidth - this.trigger.getComputedWidth();
		    	} else {
		    		this.listWidth = 250;
		    	}
		    	if(this.autoTpl) {
		    		this.tpl = undefined;
			    	this.initTpl();
			    	if(this.view) {
			    		this.list.setWidth(this.listWidth);
        				this.innerList.setWidth(this.listWidth - this.list.getFrameWidth('lr'));	
				    	this.view.tpl = this.tpl;
				    	this.view.refresh();
			    	}
		    	}
	    	}
    	}
    }
	, clearValue : function() {
		Ext.ss.form.ComboBox.superclass.clearValue.call(this);
	    if(this.showDescription) {
	    	this.desctextfield.setValue('');
	    }
	}
	, getDescriptionTextField : function() {
		return this.desctextfield;
	}
	, setValue : function(v) {
		var text = v,desc='';
        if(this.valueField){
            var r = this.findRecord(this.valueField, v);
            if(r){
                text = r.data[this.displayField];
                desc = r.data[this.descriptionField];
            } else if(Ext.isDefined(this.valueNotFoundText)){
                text = this.valueNotFoundText;
            }
        }
        this.lastSelectionText = text;
        if(this.hiddenField){
            this.hiddenField.value = Ext.value(v, '');
        }
        Ext.form.ComboBox.superclass.setValue.call(this, text);
        this.value = v;
        if(this.showDescription) {
        	this.desctextfield.setValue(desc);
        }
        return this;
	}
	, onEnable : function(){
        Ext.ss.form.ComboBox.superclass.onEnable.apply(this, arguments);
        if(this.showDescription){
            this.desctextfield.setDisabled(false);
        }
    }
	, onDisable : function(){
        Ext.ss.form.ComboBox.superclass.onDisable.apply(this, arguments);
        if(this.showDescription){
            this.desctextfield.setDisabled(true);
        }
    }
	, updateEditState: function() {
        if(this.rendered){
            if (this.readOnly) {
                this.el.dom.readOnly = true;
                this.el.addClass('x-trigger-noedit');
                this.mun(this.el, 'click', this.onTriggerClick, this);
            } else {
                if (!this.editable) {
                    this.el.dom.readOnly = true;
                    this.el.addClass('x-trigger-noedit');
                    this.mon(this.el, 'click', this.onTriggerClick, this);
                } else {
                    this.el.dom.readOnly = false;
                    this.el.removeClass('x-trigger-noedit');
                    this.mun(this.el, 'click', this.onTriggerClick, this);
                }
                this.trigger.setDisplayed(!this.hideTrigger);
            }
            this.onResize(this.width || this.wrap.getWidth());
        }
    }
    , doQuery : function(q, forceAll)
    {
        q = Ext.isEmpty(q) ? '' : q;
        var qe = {
            query: q,
            forceAll: forceAll,
            combo: this,
            cancel:false
        };
        if(this.fireEvent('beforequery', qe)===false || qe.cancel){
            return false;
        }
        q = qe.query;
        forceAll = qe.forceAll;
        if(forceAll === true || (q.length >= this.minChars)){
            if(this.lastQuery !== q){
                this.lastQuery = q;
                if(this.mode == 'local'){
                    this.selectedIndex = -1;
                    if(forceAll){
                        this.store.clearFilter();
                    }else{
                        this.store.filter(this.displayField, q);
                    }
                    this.onLoad();
                }else{
                    this.store.baseParams[this.queryParam] = q;
                    this.store.load({
                        params: this.getParams(q)
                        , callback: function()
                        {
                    		this.isQueryProcessing = false;
                    		this.comboBox.assertValue();
                        }
                    });
                    this.expand();
                }
            }else{
                this.selectedIndex = -1;
                this.onLoad();
            }
        }
    }
    , acceptsNav : function(row, col, cm){
        return !cm.isHidden(col) && cm.isCellEditable(col, row);
    }
    , assertValue  : function()
    {
    	console.log ('assert......');
    	if ((this.mode == 'local') || (!this.getStore().isQueryProcessing))
    	{
        	console.log ('assert clossss......');
            var val = this.getRawValue(),
            rec = this.findRecord(this.displayField, val);

	        if(!rec && this.forceSelection){
	        	console.log ('assert note found ......');
	            if(val.length > 0 && val != this.emptyText){
	            	if (!this.isExpanded())
	            	{
		                this.el.dom.value = Ext.value(this.lastSelectionText, '');
		                this.applyEmptyText();
	            	}
	            }else{
	                this.clearValue();
	            }
	        }else{
	        	console.log ('assert found ......');
	            if(rec)
	            {
	                if (val == rec.get(this.displayField) && this.value == rec.get(this.valueField)){
	                    return;
	                }
	                val = rec.get(this.valueField || this.displayField);
	            }
	            this.setValue(val);
	        }
	        
	        if (this.grid)
	        {
	        	var editingCol = this.editingCol;
	        	var editingRow = this.editingRow;
	        	var colId = this.grid.getColumnModel().getColumnId(editingCol);
	        	this.grid.getStore().getAt(editingRow).set(colId, this.getValue());
	        	
	        	if (this.getValue())
	        	{
	                var newCell = this.grid.walkCells(editingRow, editingCol + 1, 1, this.acceptsNav, this);
                    /*
	                if(newCell)
	                {
	                    r = newCell[0];
	                    c = newCell[1];
	                    if(this.grid.isEditor && this.grid.editing)
	                    {
	                        ae = this.grid.activeEditor;
	                        if(ae && ae.field.triggerBlur)
	                        {
	                            ae.field.triggerBlur();
	                        }
	                    }
	                    this.grid.startEditing(r, c);
	                }
	                    */
	        	}
	        }
    	}
    	
    	if (this.mode != 'local')
    	{
    		this.lastQuery = '';
    	}
    }
    , onKeyUp : function(e)
    {
    	this.getStore().isQueryProcessing = true;
    	this.getStore().comboBox = this;
        Ext.ss.form.ComboBox.superclass.onKeyUp.call(this, e);
    }
});
Ext.reg('ss-combobox', Ext.ss.form.ComboBox);