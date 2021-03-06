var SCF003 = {};

SCF003.No = new Ext.form.TextField({
	id : 'no',
	fieldLabel : "No",
	readOnly : true,
	disabled : true,
	style:{
		"color":"black",
	    "background-image":"none",
	    "background-color":"#BEBEBE"
	}

});

SCF003.date = new Ext.form.TextField({
	id : 'date',
	fieldLabel : "วันที่รับเอกสาร",
	readOnly : true,
	disabled : true,
	style:{
		"color":"black",
	    "background-image":"none",
	    "background-color":"#BEBEBE"
	}
});

SCF003.name = new Ext.form.TextField({
	id : 'name',
	fieldLabel : "ชื่อ - สกุล",
	readOnly : true,
	disabled : true,
	style:{
		"color":"black",
	    "background-image":"none",
	    "background-color":"#BEBEBE"
	}
});

SCF003.id = new Ext.form.TextField({
	id : 'id',
	fieldLabel : "รหัสพนักงาน",
	readOnly : true,
	disabled : true,
	style:{
		"color":"black",
	    "background-image":"none",
	    "background-color":"#BEBEBE"
	}
});

SCF003.company = new Ext.form.TextField({
	id : 'company',
	fieldLabel : "บริษัท",
	

});

SCF003.comboboxStore = new Ext.data.JsonStore({
	baseParams : {
		method : 'antecedent'
	},
	url : '/TransportationAllowance/SCF003.html',
	method : 'POST',
	storeId : 'bloodStore',
	root : 'records',
	idProperty : 'code',
	autoLoad : true,
	// fieldLabel : 'comboStrore',
	fields : [ {
		name : 'code'

	}, {
		name : 'description'
	} ],
	model : 'ForumThread',
	remoteSort : true
});

SCF003.createCombobox = new Ext.form.ComboBox({
	id : 'antecedent',
	fieldLabel : 'ฝ่าย / แผนก',
	mode : 'local',
	store : SCF003.comboboxStore,
	valueField : 'code',
	displayField : 'description',
	lazyRender : true,
	autoSelect : true,
	criterionField : true,
	selectOnFocus : true,
	typeAhead : true,
	forceSelection : true,
	triggerAction : 'all',
	emptyText : 'Select ...'

});
SCF003.idCardEmp = new Ext.form.TextField({
	id : 'idCardEmp',
	fieldLabel : "รหัสประจำตัวประชาชน",
	width : 250,
	readOnly : true,
	disabled : true,
	style:{
		"color":"black",
	    "background-image":"none",
	    "background-color":"#BEBEBE"
	}

});

SCF003.textArea = new Ext.ss.form.TextArea({
	fieldLabel : 'ที่อยู่',
	id : 'address',
	width : 600,
	bodyPadding : 10,

});

SCF003.comboboxStoreA = new Ext.data.JsonStore({
	baseParams : {
		method : 'antercedent2'
	},
	url : '/TransportationAllowance/SCF003.html',
	method : 'POST',
	storeId : 'comboStroreA',
	root : 'records',
	idProperty : 'code',
	autoLoad : true,
	fieldLabel : 'comboStroreA',
	

	fields : [ {
		name : 'code'

	}, {
		name : 'description'
	} ]
});
SCF003.createComboboxA = new Ext.form.ComboBox({
	fieldLabel : 'จังหวัด',
	id : 'antercedentA',
	width : 120,
	store : SCF003.comboboxStoreA,
	valueField : 'code',
	displayField : 'description',
	autoSelect : true,
	mode : 'local',
	lazyRender : true,
	criterionField : true,
	typeAhead : true,
	forceSelection : true,
	triggerAction : 'all',
	emptyText : 'Select ...',
	
	

});

SCF003.phone = new Ext.form.TextField({
	id : 'phone',
	fieldLabel : "เบอร์โทร",
	width : 120,
	maxLength: 12
	

});

SCF003.email = new Ext.form.TextField({
	id : 'email',
	fieldLabel : "E-mail",
	width : 200,
	

});

// /////////////////////set Field/////////////////////////

//SCF003.No.setValue(SCF01Domain.numberDocument);
SCF003.date.setValue(SCF01Domain.date);
var fullName = SCF01Domain.name + " " +" "+ SCF01Domain.scfLastName;
SCF003.name.setValue(fullName);
SCF003.id.setValue(SCF01Domain.id);
SCF003.company.setValue(SCF01Domain.company);
SCF003.textArea.setValue(SCF01Domain.address);
SCF003.phone.setValue(SCF01Domain.phone);
SCF003.email.setValue(SCF01Domain.email);
SCF003.createCombobox.setValue(SCF01Domain.antecedent);
SCF003.createComboboxA.setValue(SCF01Domain.antercedentA);
SCF003.idCardEmp.setValue(SCF01Domain.idCard);
SCF003.setCenter = new Ext.form.FieldSet({
	collapsible : false,
	title : 'ข้อมูลส่วนตัว',
	border : true,
	layout : 'column',
	width : 805,
	defaults : {
		xtype : 'container',
		layout : 'form',
		columnWidth : 1
	},

	items : [ {
		columnWidth : 0.5,
		items : SCF003.name,
		labelAlign : 'right'
	}, {
		columnWidth : 0.5,
		items : SCF003.id,
		labelAlign : 'right'

	}, {
		columnWidth : 0.5,
		items : SCF003.company,
		labelAlign : 'right'
	}, {
		columnWidth : 0.5,
		items : SCF003.createCombobox,
		labelAlign : 'right'
	}, {
		columnWidth : 1,
		items : SCF003.idCardEmp,
		labelAlign : 'right'
	}, {
		columnWidth : 1,
		items : SCF003.textArea,
		labelAlign : 'right'
	}, {
		columnWidth : 0.3,
		items : SCF003.createComboboxA,
		labelAlign : 'right'
	}, {
		columnWidth : 0.3,
		items : SCF003.phone,
		labelAlign : 'right'
	}, {
		columnWidth : 0.4,
		items : SCF003.email,
		labelAlign : 'right'
	}

	]
});

function addRecord() {
	SCF003.createGrid.getSelectionModel().selectAll();

	var sm = SCF003.createGrid.getSelectionModel().getSelections();

	Ext.getCmp('gridEducationInfomation').addRow();

	var i = 1 + sm.length - 1;
	var uu = SCF003.createGrid.getStore().getAt(i).data.no;

	SCF003.createGrid.store.getAt(i).set('no',i + 1);
	for (var j = 0; j <= sm.length - 1; j++) {

		SCF003.createGrid.getSelectionModel().deselectRow(j);
	}
}
var inti = 1;
SCF003.gridAddBtn = new Ext.Toolbar.Button({
	// text:RMP001AButton.Add,
	id:'scfgridAddBtn',
	tooltip : 'Add a new item',
	iconCls : 'add',
	// disabled : false,
	privilage : "educationAddBtn",


});
SCF003.gridRemoveBtn = new Ext.Toolbar.Button({
	tooltip : 'Remove the selected item',
	iconCls : 'remove',
	disabled : false,
	handler : function() {
		
		var scfparamRemove = {};
		scfparamRemove.scfpackRemove = "";
		
		var rowSelected = Ext.getCmp('gridEducationInfomation')
				.getSelectionModel().getSelections();
		if (!Ext.isEmpty(rowSelected)) {
			Ext.MessageBox.confirm('Confirm', 'คุณต้องการจะลบข้อมูลนี้ ?', function(btn) {
				if (btn == 'yes') {
					scfparamRemove.scfForRemoveNo = SCF003.No.getValue(); 
					SCF003.createGrid.getSelectionModel().selectAll();

					var smfirst = SCF003.createGrid.getSelectionModel().getSelections();
		
					var lastIndexfirst = smfirst.length - 1;
					var getValueLastIndexfirst = SCF003.createGrid.getStore().getAt(lastIndexfirst).data.no;
					for(var i=0;i<rowSelected.length;i++) {
						scfparamRemove.scfpackRemove += rowSelected[i].data.no+"!"; 
						Ext.getCmp('gridEducationInfomation').store.remove(rowSelected[i]);
					}
					scfparamRemove.method = "scfRemove";
					Ext.Ajax.request({
						url : '/TransportationAllowance/SCF003.html',
						params : scfparamRemove,
						success : function(response, opts) {
							if (scfparamRemove != null) {
								Ext.Msg.alert('Information', 'ลบข้อมูล เรียบร้อยแล้ว');
							} else {
								Ext.Msg.alert('Information', 'Error');
							}
						},
						failure : function(response, opts) {
							Ext.Msg.alert('ERROR', 'Error.');
						}
					});

//					for ( var i in rowSelected) {
//
//						Ext.getCmp('gridEducationInfomation').store
//								.remove(rowSelected[i]);
//
//					}
					SCF003.createGrid.getSelectionModel().selectAll();

					var sm = SCF003.createGrid.getSelectionModel().getSelections();
					//					
					var numberSelect = rowSelected.length;
					
					var lastIndex = sm.length - 1;
					
					if(lastIndex == -1){
						SCF003.tatolPaym.setValue(0.00);
						SCF003.tatolPaymA.setValue(0.00);
						SCF003.tatolPaymfullCase.setValue(0.00);
						convertString();
					}
					if(sm.length == 0){
						
					}
					else{
					SCF003.createGrid.store.getAt(lastIndex).set('no', getValueLastIndexfirst);
					var getValueLastIndex = SCF003.createGrid.getStore().getAt(lastIndex).data.no;
					
					var u = getValueLastIndex - numberSelect;
					var detroyNumber = 0;
					SCF003.createGrid.store.getAt(lastIndex).set('no', u);
					for (var j = lastIndex; j >= 0; j--) {
						if (j == lastIndex) {

						}
						
						detroyNumber = u - j;
						
							
					
						if(detroyNumber == 0){
							SCF003.createGrid.store.getAt(lastIndex - j).set('no',
									detroyNumber+1);
						}
						
						else{
						SCF003.createGrid.store.getAt(lastIndex - j).set('no',
								detroyNumber);
						}
					}
					SCF003.createGrid.store.getAt(0).set('no',1);
					SCF003.createGrid.getSelectionModel()
					.selectAll();
			var totalLength = SCF003.createGrid
					.getSelectionModel().getSelections();
			var a = 0;
			var b = 0;
			var c = 0;
			for (var i = 0; i <= totalLength.length - 1; i++) {
			
				a = a
				+ parseFloat(SCF003.createGrid
						.getStore().getAt(i).data.paymentTravel);
		SCF003.tatolPaym.setValue(a);
		b = b
		+ parseFloat(SCF003.createGrid
				.getStore().getAt(i).data.paymentD);

SCF003.tatolPaymA.setValue(b);
		c = c
				+ parseFloat(SCF003.createGrid
						.getStore().getAt(i).data.payment);
			SCF003.tatolPaymfullCase.setValue(c);
			if(c <= 1500){
				Ext.getDom('type1').checked = true;
				Ext.getDom('type2').checked = false;
			}
			else{
				Ext.getDom('type2').checked = true;
				Ext.getDom('type1').checked = false;
			}
			SCF003.createGrid.getSelectionModel().deselectRow(i);
			}
//			if(SCF003.createGrid.getSelectionModel().getSelections().length == 0){
//				
//			}
//			else{
//				convertString();
//			}
					for (var j = 0; j <= sm.length - 1; j++) {

						SCF003.createGrid.getSelectionModel().deselectRow(j);
					}

				}
					
				}
				convertString();
			});
		} else {
			Ext.Msg.alert('Warning', 'กรุณาเลือกข้อมูลที่จะลบ');
		}

	}
});
SCF003.gridCopyBtn = new Ext.Toolbar.Button(
		{
			tooltip : 'Copy',
			iconCls : 'copy',
			disabled : false,
			handler : function() {
				Ext.MessageBox
						.show({
							title : 'Copy',
							msg : '<center>Copy : <select id="numberRecord"><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option><option>9</option><option>10</option><option>11</option><option>12</option><option>13</option><option>14</option><option>15</option><option>16</option><option>17</option><option>18</option><option>19</option><option>20</option><option>21</option><option>22</option><option>23</option><option>24</option><option>25</option><option>26</option><option>27</option><option>28</option><option>29</option><option>30</option></select> Record</center>',
							width : 300,
							buttons : Ext.MessageBox.OKCANCEL,
							animEl : 'submit',
							fn : function(btn, reason) {
								var rowSelected = Ext.getCmp(
										'gridEducationInfomation')
										.getSelectionModel().getSelections();
								var int1 = document
										.getElementById('numberRecord').value;
								if (btn == 'ok') {
									if (!Ext.isEmpty(rowSelected)) {
										Ext.Msg
												.show({
													title : 'Confrim',
													msg : 'คุณต้องการที่จะ copy ?',
													buttons : Ext.MessageBox.OKCANCEL,
													fn : function(buttonId,
															text) {
														if (buttonId == 'ok'
																&& rowSelected.length == 1) {
//															var x = rowSelected
//																	.pop().data;
															var selectedColumn1 = Ext.getCmp('gridEducationInfomation').getSelectionModel().getSelections()[0].get('no');
															var selectedColumn2 = Ext.getCmp('gridEducationInfomation').getSelectionModel().getSelections()[0].get('gridDate');
															var selectedColumn3 = Ext.getCmp('gridEducationInfomation').getSelectionModel().getSelections()[0].get('customer');
															var selectedColumn4 = Ext.getCmp('gridEducationInfomation').getSelectionModel().getSelections()[0].get('region');
															var selectedColumn5 = Ext.getCmp('gridEducationInfomation').getSelectionModel().getSelections()[0].get('goal');
															var selectedColumn6 = Ext.getCmp('gridEducationInfomation').getSelectionModel().getSelections()[0].get('paymentTravel');
															var selectedColumn7 = Ext.getCmp('gridEducationInfomation').getSelectionModel().getSelections()[0].get('paymentD');
															var selectedColumn8 = Ext.getCmp('gridEducationInfomation').getSelectionModel().getSelections()[0].get('payment');
															var selectedColumn9 = Ext.getCmp('gridEducationInfomation').getSelectionModel().getSelections()[0].get('remark');
//															
															SCF003.createGrid
																	.getSelectionModel()
																	.selectAll();
															var sm = SCF003.createGrid
																	.getSelectionModel()
																	.getSelections();
															var lastIndex = sm.length - 1;
															var getValueLastIndex = SCF003.createGrid
																	.getStore()
																	.getAt(
																			lastIndex).data.no;
															// alert(getValueLastIndex);
															var j = 0;
															var increment = 0;
															for (var i = int1; i > 0; i--) {
																j++;
																Ext
																		.getCmp(
																				'gridEducationInfomation')
																		.addRow();
																increment = getValueLastIndex++;
																increment = increment + 1;

																SCF003.createGrid.store.getAt(lastIndex+ j).set('no',increment);
																SCF003.createGrid.store.getAt(lastIndex+ j).set('gridDate',selectedColumn2);
																SCF003.createGrid.store.getAt(lastIndex+ j).set('customer',selectedColumn3);
																SCF003.createGrid.store.getAt(lastIndex+ j).set('region',selectedColumn4);
																SCF003.createGrid.store.getAt(lastIndex+ j).set('goal',selectedColumn5);
																SCF003.createGrid.store.getAt(lastIndex+ j).set('paymentTravel',selectedColumn6);
																SCF003.createGrid.store.getAt(lastIndex+ j).set('paymentD',selectedColumn7);
																SCF003.createGrid.store.getAt(lastIndex+ j).set('payment',selectedColumn8);
																SCF003.createGrid.store.getAt(lastIndex+ j).set('remark',selectedColumn9);

																//																

															}
															//***********************************************//
															SCF003.createGrid.getSelectionModel()
															.selectAll();
													var totalLength = SCF003.createGrid
															.getSelectionModel().getSelections();
													var a = 0;
													var b = 0;
													var c = 0;
													for (var i = 0; i <= totalLength.length - 1; i++) {
														a = a
														+ parseFloat(SCF003.createGrid
																.getStore().getAt(i).data.paymentTravel);
												SCF003.tatolPaym.setValue(a);
												b = b
												+ parseFloat(SCF003.createGrid
														.getStore().getAt(i).data.paymentD);

										SCF003.tatolPaymA.setValue(b);
												c = c
														+ parseFloat(SCF003.createGrid
																.getStore().getAt(i).data.payment);
													SCF003.tatolPaymfullCase.setValue(c);
													if(c <= 1500){
														Ext.getDom('type1').checked = true;
														Ext.getDom('type2').checked = false;
													}
													else{
														Ext.getDom('type2').checked = true;
														Ext.getDom('type1').checked = false;
													}
													SCF003.createGrid.getSelectionModel().deselectRow(i);
													}
													convertString();
													//*********************************************************//
														
														} else {
															Ext.Msg
																	.alert("กรุณาเลือกข้อมูลที่จะ copy");
														}

													}
												});

									} else {
										Ext.Msg.alert('Warning',
												'กรุณาเลือกข้อมูลที่จะ copy');
									}
								}
							}
						});
			}
		});
function sleep(milliseconds) {
	var start = new Date().getTime();
	for (var i = 0; i < 1e7; i++) {
		if ((new Date().getTime() - start) > milliseconds) {
			break;
		}
	}
}
var param2 = {};
function saveOrUpdate() {
	
	param2.no = Ext.getCmp('no').getValue();
	param2.date = Ext.getCmp('date').getValue();
	param2.name = Ext.getCmp('name').getValue();
	param2.id = Ext.getCmp('id').getValue();
	param2.company = Ext.getCmp('company').getValue();
	param2.antecedent = Ext.getCmp('antecedent').getValue();
	param2.address = Ext.getCmp('address').getValue();
	param2.antercedentA = Ext.getCmp('antercedentA').getValue();
	param2.phone = Ext.getCmp('phone').getValue();
	param2.email = Ext.getCmp('email').getValue();

	// **************** get value in Bottom to controller
	// **********//
	param2.tatolPaym = Ext.getCmp('tatolPaym').value;
	param2.tatolPaymA = Ext.getCmp('tatolPaymA').value;
	param2.tatolPaymfullCase = Ext.getCmp('tatolPaymfullCase').value;
	param2.tatolManey = Ext.getCmp('tatolManey').getValue();
	param2.document = Ext.getCmp('document').getValue();
	param2.forPay = Ext.getCmp('forPay').getValue();
	param2.bank = Ext.getCmp('bank').getValue();
	param2.branch = Ext.getCmp('branch').getValue();
	param2.accountNumber = Ext.getCmp('accountNumber').getValue();
	param2.typeAccount = Ext.getCmp('typeAccount').getValue();
	param2.type1 = Ext.getCmp('type1').getValue();
	param2.type2 = Ext.getCmp('type2').getValue();
	param2.numberDocument = Ext.getCmp('no').getValue();

	

	// ************************** get value to controller by
	// Grid ***************************//

	SCF003.createGrid.getSelectionModel().selectAll();

	var sm = SCF003.createGrid.getSelectionModel().getSelections();
	param2.pack = "";

	for (var i = 0; i <= sm.length - 1; i++) {
		var dataGridNo = SCF003.createGrid.getStore().getAt(i).data.no;
		var dataGridData = SCF003.createGrid.getStore().getAt(i).data.gridDate;
		var dataGridCustomer = SCF003.createGrid.getStore().getAt(i).data.customer;
		var dataGridRegion = SCF003.createGrid.getStore().getAt(i).data.region;
		var dataGridGoal = SCF003.createGrid.getStore().getAt(i).data.goal;
		var dataGridPaymentTravel = SCF003.createGrid.getStore().getAt(i).data.paymentTravel;
		var dataGridPaymentD = SCF003.createGrid.getStore().getAt(i).data.paymentD;
		var dataGridPayment = SCF003.createGrid.getStore().getAt(i).data.payment;
		var dataRemark = SCF003.createGrid.getStore().getAt(i).data.remark;
			if(dataRemark == "" || dataRemark == null || dataRemark == "undefined"){
				dataRemark = "  ";
			}
		SCF003.createGrid.getSelectionModel().deselectRow(i);
		param2.pack += dataGridNo + "," + dataGridData + "," + dataGridCustomer
				+ "," + dataGridRegion + "," + dataGridGoal + ","
				+ dataGridPaymentTravel + "," + dataGridPaymentD + ","
				+ dataGridPayment + "," + dataRemark + "!";
	}
	param2.method = "save1";
	Ext.Ajax.request({
		url : '/TransportationAllowance/SCF003.html',
		params : param2,
		success : function(response, opts) {
			if (param2 != null) {
				Ext.Msg.alert('Information', 'บันทึกเรียบร้อย');
				SCF003.No.setValue(JSON.parse(response.responseText).numberDoc);
			} else {
				Ext.Msg.alert('Information', 'Error');
			}
		},
		failure : function(response, opts) {
			Ext.Msg.alert('ERROR', 'Error.');
		}
	});
}

//*********************** function Convert Number to String **************************//

function convertString(){
	
	var Number = Ext.getCmp('tatolPaymfullCase').value;
		
		for (var i = 0; i < Number.length; i++)
			{
				Number = Number.replace (",", ""); //ไม่ต้องการเครื่องหมายคอมมาร์
				Number = Number.replace (" ", ""); //ไม่ต้องการช่องว่าง
				Number = Number.replace ("บาท", ""); //ไม่ต้องการตัวหนังสือ บาท
				Number = Number.replace ("฿", ""); //ไม่ต้องการสัญลักษณ์สกุลเงินบาท
			}
			//สร้างอะเรย์เก็บค่าที่ต้องการใช้เอาไว้
			var TxtNumArr = new Array ("ศูนย์", "หนึ่ง", "สอง", "สาม", "สี่", "ห้า", "หก", "เจ็ด", "แปด", "เก้า", "สิบ");
			var TxtDigitArr = new Array ("", "สิบ", "ร้อย", "พัน", "หมื่น", "แสน", "ล้าน");
			var BahtText = "";
			//ตรวจสอบดูซะหน่อยว่าใช่ตัวเลขที่ถูกต้องหรือเปล่า ด้วย isNaN == true ถ้าเป็นข้อความ == false ถ้าเป็นตัวเลข
			if (isNaN(Number))
			{
				return "ข้อมูลนำเข้าไม่ถูกต้อง";
			} else
			{
				//ตรวสอบอีกสักครั้งว่าตัวเลขมากเกินความต้องการหรือเปล่า
				if ((Number - 0) > 9999999.9999)
				{
					return "ข้อมูลนำเข้าเกินขอบเขตที่ตั้งไว้";
				} else
				{
					//พรากทศนิยม กับจำนวนเต็มออกจากกัน (บาปหรือเปล่าหนอเรา พรากคู่เขา)
					Number = Number.split (".");
					
					var NumberLen = Number[0].length - 0;
					for(var i = 0; i < NumberLen; i++)
					{
						var tmp = Number[0].substring(i, i + 1) - 0;
						if (tmp != 0)
						{
							if ((i == (NumberLen - 1)) && (tmp == 1))
							{
								BahtText += "เอ็ด";
							} else
								if ((i == (NumberLen - 2)) && (tmp == 2))
								{
									BahtText += "ยี่";
								} else
									if ((i == (NumberLen - 2)) && (tmp == 1))
									{
										BahtText += "";
									} else
									{
										BahtText += TxtNumArr[tmp];
									}
							BahtText += TxtDigitArr[NumberLen - i - 1];
						}
					}
					
					BahtText += "บาท";
					if (Number[0] == "0"){
						Ext.getCmp('tatolManey').setValue("ศูนย์บาทถ้วน");
					}
					else if (Number[1] == "00")
					{
						Ext.getCmp('tatolManey').setValue(BahtText + "ถ้วน");
					
					} else
					{
						DecimalLen = Number[1].length - 0;
						for (var i = 0; i < DecimalLen; i++)
						{
							var tmp = Number[1].substring(i, i + 1) - 0;
							if (tmp != 0)
							{
								if ((i == (DecimalLen - 1)) && (tmp == 1))
								{
									BahtText += "เอ็ด";
								} else
									if ((i == (DecimalLen - 2)) && (tmp == 2))
									{
										BahtText += "ยี่";
									} else
										if ((i == (DecimalLen - 2)) && (tmp == 1))
										{
											BahtText += "";
										} else
										{
											BahtText += TxtNumArr[tmp];
										}
								BahtText += TxtDigitArr[DecimalLen - i - 1];
							}
						}
						BahtText += "สตางค์";
						Ext.getCmp('tatolManey').setValue(BahtText);
					}

				}
			}
	}

//************************************************************************************//

SCF003.gridSaveBtn = new Ext.Toolbar.Button(
		{
			tooltip : 'Save',
			iconCls : 'save',
			disabled : false,
			handler : function() {
				Ext.MessageBox
						.confirm(
								'Confirmation',
								'ยืนยันข้อมูลถูกต้อง ? <br/>เอกสารของคุณจะอยู่ในสถานะ \"บันทึก\"',
								confirmFunction);
				function confirmFunction(btn) {
					if (btn == 'yes') {
						var checkEmail = SCF003.email.getValue();
						 var emailFilter=/^.+@.+\..{2,3}$/;//รูปแบบการเช็คว่าถกต้องหรือป่าว
						 var str=checkEmail;
						param2.status = "001";
						var forPay = Ext.getCmp('forPay').getValue();
						 if (!(emailFilter.test(str))) {
								Ext.Msg.alert('Information',
								'ท่านใส่อีเมล์ไม่ถูกต้อง');
							    
							}
						
						 else if (Ext.isEmpty(forPay)) {
							Ext.Msg.alert('Information',
									'กรุณากรอกข้อมูลเพื่อชำระ');
						}
						else if(Ext.isEmpty(Ext.getCmp('editGridDate').getValue())){
							Ext.Msg.alert('Information',
							'กรุณากรอกข้อมูลการเดินทางในตาราง');
						}
						
						 
						
						
						else{
						saveOrUpdate();
						}
					}
				}
			}

		});

SCF003.comboCustomerStoreGrid = new Ext.data.JsonStore({
	baseParams : {
		method : 'customer'
	},
	url : '/TransportationAllowance/SCF003.html',
	method : 'POST',
	storeId : 'bloodStore',
	root : 'records',
	idProperty : 'code',
	autoLoad : true,
	// fieldLabel : 'comboStrore',
	fields : [ {
		name : 'code'

	}, {
		name : 'description'
	} ],
	model : 'ForumThread',
	remoteSort : true
});

SCF003.comboCustomerGrid = new Ext.form.ComboBox({
	id : 'comboCustomerGrid',
	// fieldLabel : 'ฝ่าย / แผนก',
	mode : 'local',
	store : SCF003.comboCustomerStoreGrid,
	valueField : 'code',
	displayField : 'description',
	lazyRender : true,
	autoSelect : true,
	criterionField : true,
	selectOnFocus : true,
	typeAhead : true,
	forceSelection : true,
	triggerAction : 'all',
	emptyText : 'Select ...'
});
SCF003.checkboxselection = new Ext.grid.CheckboxSelectionModel({
	singleSelect : false,
	

});

function changeNumberPrecisionPaymentTravel(){
	SCF003.createGrid.getSelectionModel().selectAll();
	var sm = SCF003.createGrid.getSelectionModel().getSelections();
	var valueSet = 0;
	for (var i = 0; i <= sm.length - 1; i++) {
	var check = parseFloat(SCF003.createGrid.getStore().getAt(i).data.paymentTravel).toFixed(2).split(".");
	if(check[1] < 13 ){
		check[1]= 0;
		valueSet= check[0]+ "." + check[1];
		SCF003.createGrid.store.getAt(i).set('paymentTravel', valueSet);
	
		}
	else if(check[1] >= 13 && check[1] < 38){
		check[1]= 25;
		valueSet= check[0]+ "." + check[1];
		SCF003.createGrid.store.getAt(i).set('paymentTravel', valueSet);
		}
	else if(check[1] >=38 && check[1] < 63 ){
		check[1]= 50;
		valueSet= check[0]+ "." + check[1];
		SCF003.createGrid.store.getAt(i).set('paymentTravel', valueSet);
		}
	else if(check[1] >=63 && check[1] < 100 ){
		check[1]= 75;
		valueSet= check[0]+ "." + check[1];
		SCF003.createGrid.store.getAt(i).set('paymentTravel', valueSet);
		}
	else{
		check[1]= 0;
		valueSet= check[0]+ "." + check[1];
		SCF003.createGrid.store.getAt(i).set('paymentTravel', valueSet);
		}
	}
}


function changeNumberPrecisionPaymentD(){
	SCF003.createGrid.getSelectionModel().selectAll();
	var sm = SCF003.createGrid.getSelectionModel().getSelections();
	var valueSet = 0;
	for (var i = 0; i <= sm.length - 1; i++) {
	var check = parseFloat(SCF003.createGrid.getStore().getAt(i).data.paymentD).toFixed(2).split(".");
	if(check[1] < 13 ){
		check[1]= 0;
		valueSet= check[0]+ "." + check[1];
		SCF003.createGrid.store.getAt(i).set('paymentD', valueSet);
	
		}
	else if(check[1] >= 13 && check[1] < 38){
		check[1]= 25;
		valueSet= check[0]+ "." + check[1];
		SCF003.createGrid.store.getAt(i).set('paymentD', valueSet);
		}
	else if(check[1] >=38 && check[1] < 63 ){
		check[1]= 50;
		valueSet= check[0]+ "." + check[1];
		SCF003.createGrid.store.getAt(i).set('paymentD', valueSet);
		}
	else if(check[1] >=63 && check[1] < 100 ){
		check[1]= 75;
		valueSet= check[0]+ "." + check[1];
		SCF003.createGrid.store.getAt(i).set('paymentD', valueSet);
		}
	else{
		check[1]= 0;
		valueSet= check[0]+ "." + check[1];
		SCF003.createGrid.store.getAt(i).set('paymentD', valueSet);
		}
	}
}

//window.onload = function() {
//	  setTimeout(function() {
////	    document.getElementById('gridDate').click();
//	
//	  }, 1000);
//	};

SCF003.gridColumns = [
		SCF003.checkboxselection,

		{

			header : 'No',
			dataIndex : 'no',
			align : 'center',

			width : 87.08,

		},
		{

			header : 'วันที่',
			dataIndex : 'gridDate',
			align : 'center',
//			type : 'date',
			sortable: true, renderer: Ext.util.Format.dateRenderer('d/m/Y'),
//			renderer:Ext.util.Format.dateRenderer('d/m/Y'),
			editor : new Ext.form.DateField({
				
				id : 'editGridDate',
				maxValue : new Date(),
				emptyText : 'Select ...',
				format : 'd/m/Y',
				

			}),
//			menuDisabled : true,
//			
//			renderer :function(a,b,c){
//			Ext.getCmp('editGridDate').setValue(a);
//			return a;	
//			},	
			
			width : 87.08,

		},
		{
			header : 'ลูกค้า',
			dataIndex : 'customer',
			align : 'center',
			editor : SCF003.comboCustomerGrid,
			width : 87.08,

		},
		{

			header : 'จาก',
			dataIndex : 'region',
			align : 'center',
			id : 'region',
			editor : new Ext.form.TextField({
				id : 'editRegion',
			}),
			width : 87.08,

		},
		{
			header : 'ถึง',
			dataIndex : 'goal',
			align : 'center',
			editor : new Ext.form.TextField({
				id : 'editGoal',
			}),
			width : 87.08,

		}

		,
		{
			header : 'ค่าเดินทาง',
			dataIndex : 'paymentTravel',
			align : 'center',
			xtype: 'numbercolumn', format:'0,000.00',
			
			 flex: 0,
			editor : new Ext.ss.form.NumberField(
					{
						id : 'editPaymentTravel',
						minValue: 0,
						maxValue:999999999,
						
						listeners : {
							change : function(f, e) {

								
								SCF003.createGrid.getSelectionModel().selectAll();
								var totalLength = SCF003.createGrid.getSelectionModel().getSelections();
								var a = 0;
								var b = 0;
								var totalPaymentTravel = 0;
								var c = 0;
								changeNumberPrecisionPaymentTravel();
								for (var i = 0; i <= totalLength.length - 1; i++) {
									if(Ext.isEmpty(SCF003.createGrid.getStore().getAt(i).data.paymentTravel)){
										SCF003.createGrid.store.getAt(i).set('paymentTravel', 0.00);
									}
									var test = SCF003.createGrid.getStore().getAt(i).data.paymentD;
									if (Ext.isEmpty(test)) {
										totalPaymentTravel = (parseFloat(SCF003.createGrid.getStore().getAt(i).data.paymentTravel)).toFixed(2);
										SCF003.createGrid.store.getAt(i).set('payment', totalPaymentTravel);
										var num = (0).toFixed(2);
										SCF003.createGrid.store.getAt(i).set('paymentD', num);
										
										

										a = a+ parseFloat(SCF003.createGrid.getStore().getAt(i).data.paymentTravel);
										SCF003.tatolPaym.setValue(a);
										
										b = b+ parseFloat(SCF003.createGrid.getStore().getAt(i).data.paymentD);

										SCF003.tatolPaymA.setValue(b);
										c = c+ parseFloat(SCF003.createGrid.getStore().getAt(i).data.payment);
										SCF003.tatolPaymfullCase.setValue(c);
										if(c <= 1500){
											Ext.getDom('type1').checked = true;
											Ext.getDom('type2').checked = false;
										}
										else{
											Ext.getDom('type2').checked = true;
											Ext.getDom('type1').checked = false;
										}
										SCF003.createGrid.getSelectionModel().deselectRow(i);
									} else {

										totalPaymentTravel = (parseFloat(SCF003.createGrid.getStore().getAt(i).data.paymentTravel)+ parseFloat(SCF003.createGrid.getStore().getAt(i).data.paymentD)).toFixed(2);
										SCF003.createGrid.store.getAt(i).set('payment', totalPaymentTravel);
										a = a+ parseFloat(SCF003.createGrid.getStore().getAt(i).data.paymentTravel);
										SCF003.tatolPaym.setValue(a);
										
										b = b+ parseFloat(SCF003.createGrid.getStore().getAt(i).data.paymentD);

										SCF003.tatolPaymA.setValue(b);
										c = c+ parseFloat(SCF003.createGrid.getStore().getAt(i).data.payment);
										SCF003.tatolPaymfullCase.setValue(c);
										if(c <= 1500){
											Ext.getDom('type1').checked = true;
											Ext.getDom('type2').checked = false;
										}
										else{
											Ext.getDom('type2').checked = true;
											Ext.getDom('type1').checked = false;
										}
										SCF003.createGrid.getSelectionModel()
												.deselectRow(i);
									}
									
								}
								
								convertString();
								

							}
						}
					}),
			width : 87.08,

		},
		{
			header : 'ค่าทางด่วน',
			dataIndex : 'paymentD',
			align : 'center',
			xtype: 'numbercolumn', format:'0,000.00',
			 flex: 0,
			editor : new Ext.ss.form.NumberField(
					{
						id : 'editPaymentD',
						minValue: 0,
						maxValue:999999999,
						listeners : {
							change : function(f, e) {
								SCF003.createGrid.getSelectionModel().selectAll();
								var totalLength = SCF003.createGrid.getSelectionModel().getSelections();
								var a = 0;
								var b = 0;
								var totalPayment = 0;
								var c = 0;
								changeNumberPrecisionPaymentD();
								for (var i = 0; i <= totalLength.length - 1; i++) {
									if(Ext.isEmpty(SCF003.createGrid.getStore().getAt(i).data.paymentD)){
										SCF003.createGrid.store.getAt(i).set('paymentD', 0.00);
									}
									var test = SCF003.createGrid.getStore().getAt(i).data.paymentTravel;
									if (Ext.isEmpty(test)) {
										test = 0;
										totalPayment = (parseFloat(SCF003.createGrid.getStore().getAt(i).data.paymentD)+ parseFloat(test)).toFixed(2);
										SCF003.createGrid.store.getAt(i).set('payment', totalPayment);
										var num = (0).toFixed(2);
										SCF003.createGrid.store.getAt(i).set('paymentTravel', num);
										
										a = a+ parseFloat(SCF003.createGrid.getStore().getAt(i).data.paymentTravel);
										SCF003.tatolPaym.setValue(a);
										b = b+ parseFloat(SCF003.createGrid.getStore().getAt(i).data.paymentD);

										SCF003.tatolPaymA.setValue(b);
										c = c+ parseFloat(SCF003.createGrid.getStore().getAt(i).data.payment);
										SCF003.tatolPaymfullCase.setValue(c);
										if(c <= 1500){
											Ext.getDom('type1').checked = true;
											Ext.getDom('type2').checked = false;
										}
										else{
											Ext.getDom('type2').checked = true;
											Ext.getDom('type1').checked = false;
										}
										SCF003.createGrid.getSelectionModel()
												.deselectRow(i);
									} else {
										totalPayment = (parseFloat(SCF003.createGrid.getStore().getAt(i).data.paymentTravel)+ parseFloat(SCF003.createGrid.getStore().getAt(i).data.paymentD)).toFixed(2);
										SCF003.createGrid.store.getAt(i).set('payment', totalPayment);
										
										a = a+ parseFloat(SCF003.createGrid.getStore().getAt(i).data.paymentTravel);
										SCF003.tatolPaym.setValue(a);
										b = b+ parseFloat(SCF003.createGrid.getStore().getAt(i).data.paymentD);

										SCF003.tatolPaymA.setValue(b);
										c = c+ parseFloat(SCF003.createGrid.getStore().getAt(i).data.payment);
										SCF003.tatolPaymfullCase.setValue(c);
										
										
										if(c <= 1500){
											Ext.getDom('type1').checked = true;
											Ext.getDom('type2').checked = false;
										}
										else{
											Ext.getDom('type2').checked = true;
											Ext.getDom('type1').checked = false;
										}
										SCF003.createGrid.getSelectionModel()
												.deselectRow(i);
										
									}
								}
								convertString();

							}
						}
					}),
			width : 87.08,

		}, {
			header : 'รวมเป็นเงิน',
			dataIndex : 'payment',
			align : 'center',
			xtype: 'numbercolumn', format:'0,000.00',
			width : 87.08,

		}, {
			header : 'หมายเหตุ',
			dataIndex : 'remark',
			align : 'center',
			editor : new Ext.form.TextField({
				id : 'editRemark',
			}),
			width : 87.08,

		}

];

SCF003.groupHeaderPlugins = new Ext.ux.plugins.GroupHeaderGrid({
	rows : [ [ {header:'<input type="text" style="display:none;">' 
		}, {}, {}, {}, {
		header : "การเดินทาง",
		colspan : 2,
		align : 'center',
		
	}, {
		header : "ค่าใช้จ่าย",
		colspan : 2,
		align : 'center'
	}, {}, {} ] ],

});

SCF003.gridStrore = new Ext.data.JsonStore({
	baseParams : {
		method : 'gridData',
		empId  : "-",
		noDoc  : "-"
	},
	url : '/TransportationAllowance/SCF003.html',
	method : 'POST',
	pageSize : 10,
	storeId : 'gridStore',
	root : 'records',
	idProperty : 'code',
	autoLoad : true,

	fields : [ {
		name : 'check'
	}, {
		name : 'no'
	}, {
		name : 'gridDate',
		type: 'date', dateFormat: 'd/m/Y'
	}, {
		name : 'customer'
	}, {
		name : 'region'
	}, {
		name : 'goal'
	}, {
		name : 'paymentTravel'
	}, {
		name : 'paymentD'
	}, {
		name : 'payment'
	}, {
		name : 'remark'
	} ],
	model : 'ForumThread',
	remoteSort : true

});

SCF003.totalManey = new Ext.form.TextField({
	id : 'tatolManey',
	fieldLabel : "จำนวนเงินเป็นตัวอักษร",
	width : 300,
	readOnly : true,
	disabled : true,
	style:{
		"color":"black",
	    "background-image":"none",
	    "background-color":"#BEBEBE"
	}

});
SCF003.totalManey.setValue(SCF01Domain.tatolManey);
//SCF003.document = new Ext.form.TextField({
//	id : 'document',
//	fieldLabel : "เอกสารแนบ",
//	width : 120
//
//});

SCF003.documentStore = new Ext.data.JsonStore({
	baseParams : {
		method : 'document'
	},
	url : '/TransportationAllowance/SCF003.html',
	method : 'POST',
	storeId : 'comboStroreAa',
	root : 'records',
	idProperty : 'code',
	autoLoad : true,
	fieldLabel : 'comboStroreAa',
	

	fields : [ {
		name : 'code'

	}, {
		name : 'description'
	} ]
});
SCF003.document = new Ext.form.ComboBox({
	fieldLabel : 'เอกสารแนบ',
	id : 'document',
	width : 100,
	store : SCF003.documentStore,
	valueField : 'code',
	displayField : 'description',
	autoSelect : true,
	mode : 'local',
	lazyRender : true,
	criterionField : true,
	typeAhead : true,
	forceSelection : true,
	triggerAction : 'all',
	emptyText : 'Select ...',
	
	

});
SCF003.forPay = new Ext.form.TextField({
	id : 'forPay',
	fieldLabel : "ใบ เพื่อชำระ",
	width : 400

});
SCF003.bank = new Ext.form.TextField({
	id : 'bank',
	fieldLabel : "บัญชีธนาคาร",
	width : 120,
	readOnly : true,
	disabled : true,
	style:{
		"color":"black",
	    "background-image":"none",
	    "background-color":"#BEBEBE"
	}

});
SCF003.branch = new Ext.form.TextField({
	id : 'branch',
	fieldLabel : "สาขา",
	width : 240,
	readOnly : true,
	disabled : true,
	style:{
		"color":"black",
	    "background-image":"none",
	    "background-color":"#BEBEBE"
	}

});
SCF003.accountNumber = new Ext.form.TextField({
	id : 'accountNumber',
	fieldLabel : "เลขที่บัญชี",
	width : 240,
	readOnly : true,
	disabled : true,
	style:{
		"color":"black",
	    "background-image":"none",
	    "background-color":"#BEBEBE"
	}

});
SCF003.typeAccount = new Ext.form.TextField({
	id : 'typeAccount',
	fieldLabel : "ประเภทบัญชี",
	width : 240,
	readOnly : true,
	disabled : true,
	style:{
		"color":"black",
	    "background-image":"none",
	    "background-color":"#BEBEBE"
	}

});
SCF003.textLabel = new Ext.form.Label({
	fieldLabel : "ได้รับ"
});

SCF003.checkBox1 = new Ext.form.Checkbox({
	id : 'type1',
	name : 'name',
	labelSeparator : '',
	hideLabel : true,
	boxLabel : 'เงินสด',
	fieldLabel : 'text'
});

SCF003.checkBox2 = new Ext.form.Checkbox({
	id : 'type2',
	name : 'name',
	labelSeparator : '',
	hideLabel : true,
	boxLabel : 'เช็คธนาคาร',
	fieldLabel : 'text'
});
// ******************** set Value *****************//
SCF003.bank.setValue(SCF01Domain.bank);
SCF003.branch.setValue(SCF01Domain.branch);
SCF003.accountNumber.setValue(SCF01Domain.accountNumber);
SCF003.typeAccount.setValue(SCF01Domain.typeAccount);
SCF003.createButtonSubmit = new Ext.Button({
	id : 'submit',
	text : 'Submit',
	width : 100
});

SCF003.createButtonPrint = new Ext.Button({
	id : 'print',
	text : 'Print Preview',
	 disabled:true,
	width : 100
});

SCF003.createButtonBack = new Ext.Button({
	id : 'back',
	text : 'Back',
	width : 100
});

SCF003.setBottom = new Ext.form.FieldSet({
	collapsible : false,

	border : true,
	width : 805,
	layout : 'column',

	defaults : {
		xtype : 'container',
		layout : 'form',
		columnWidth : 1
	},

	items : [ {
		columnWidth : 1,
		items : SCF003.totalManey,
		labelAlign : 'right',
		style : {
			"margin-left" : "330px",

		},
	}, {
		columnWidth : 0.3,
		items : SCF003.document,
		labelAlign : 'right'
	}, {
		columnWidth : 0.7,
		items : SCF003.forPay,

	}, {
		columnWidth : 0.5,
		items : SCF003.bank,
		labelAlign : 'right'
	}, {
		columnWidth : 0.5,
		items : SCF003.branch,
		labelAlign : 'right'
	}, {
		columnWidth : 0.5,
		items : SCF003.accountNumber,
		labelAlign : 'right'
	}, {
		columnWidth : 0.5,
		items : SCF003.typeAccount,
		labelAlign : 'right'
	}, {
		columnWidth : 0.15,
		items : SCF003.textLabel,
		labelAlign : 'right'

	}, {
		columnWidth : 0.1,
		items : SCF003.checkBox1,

	}, {
		columnWidth : 0.75,
		items : SCF003.checkBox2,

	}

	]
});
SCF003.tatolPaym = new Ext.ss.form.NumberField({
	id : 'tatolPaym',
	width : 80,
	readOnly : true,
	style:{
		"color":"black",
	    "background-image":"none",
	    "background-color":"#FFFACD"
	}

});
SCF003.tatolPaymA = new Ext.ss.form.NumberField({
	id : 'tatolPaymA',

	width : 80,
	readOnly : true,
	style:{
		"color":"black",
	    "background-image":"none",
	    "background-color":"#FFFACD"
	}

});
SCF003.tatolPaymfullCase = new Ext.ss.form.NumberField({
	id : 'tatolPaymfullCase',

	width : 80,
	readOnly : true,
	style:{
		"color":"black",
	    "background-image":"none",
	    "background-color":"#FFFACD"
	}

});

SCF003.createGrid = new Ext.ss.grid.EditorGridPanel({
	id : 'gridEducationInfomation',
	store : SCF003.gridStrore,
	sm : SCF003.checkboxselection,
	columns : SCF003.gridColumns,
	columnLines : true,
	height : 350,
	width : 805,

	lazyRender : true,
	autoSelect : true,
	criterionField : true,
	selectOnFocus : true,
	typeAhead : true,
	forceSelection : true,
	triggerAction : 'all',
	trackMouseOver : false,
	disableSelection : true,
	loadMask : true,

	plugins : [ SCF003.groupHeaderPlugins ],
	clicksToEdit : 1,
	tbar : [ SCF003.gridAddBtn, '-', SCF003.gridRemoveBtn, '-',
			SCF003.gridCopyBtn, '-', SCF003.gridSaveBtn ], 
	bbar: ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','รวม','-','-','-',SCF003.tatolPaym,'-', SCF003.tatolPaymA,'-',SCF003.tatolPaymfullCase],
//	bbar : new Ext.PagingToolbar({
//		pageSize : 25,
//		store : SCF003.gridStrore,
//		displayInfo : true,
//		displayMsg : ' {0} - {1} of {2}',
//		emptyMsg : "Report of Travel",
//		items : [ '-', {
//			pressed : true,
//			enableToggle : true,
//			text : 'Show Preview',
//			cls : 'x-btn-text-icon details',
//			toggleHandler : function(btn, pressed) {
//				var view = SCF003.createGrid.getView();
//				view.showPreview = pressed;
//				view.refresh();
//
//			}
//		}, '-', "รวม", '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-',
//				'-', SCF003.tatolPaym, '-', SCF003.tatolPaymA, '-',
//				SCF003.tatolPaymfullCase ]
//	})
});
// SCF003.gridStrore.load({params:{start:0, limit:25}});
// SCF003.textHeader = new Ext.form.Label({
// fieldLabel : "ใบเบิกค่าเดินทาง"
// });
Ext
		.onReady(function() {
			
			SCF003.resumeForm = new Ext.form.FormPanel({

				applyTo : "content",
				layout : 'column',
				border : false,
				width : '60%',
				style : {
					"margin-left" : "auto",
					"margin-right" : "auto",
					"margin-top" : "50px"
				},
				defaults : {
					xtype : 'container',
					layout : 'form',
					columnWidth : 1,
					// labelWidth : 0,
					anchor : '100%',

				// hideBorders : true
				},

				items : [
				// {
				// items : SCF003.textHeader,
				// labelAlign : 'center',
				// width:'100'
				//				         				
				//
				// },

				{
					items : SCF003.No,
					labelAlign : 'right',
					style : {
						"margin-left" : "550px",

					},
				// disabled: true
				}, {
					columnWidth : 1,
					items : SCF003.date,
					labelAlign : 'right',
					style : {
						"margin-left" : "550px",

					},
				// disabled: true
				}, {
					columnWidth : 1,
					items : SCF003.setCenter,

				}, {
					columnWidth : 1,
					items : SCF003.createGrid
				}, {
					columnWidth : 1,
					items : SCF003.setBottom
				}, {
					columnWidth : 0.35,
					items : SCF003.createButtonSubmit,

					style : {
						"margin-left" : "150px",

					},

				}, {
					columnWidth : 0.3,
					items : SCF003.createButtonPrint,
					style : {
						"margin-left" : "50px",

					},

				}, {
					columnWidth : 0.35,
					items : SCF003.createButtonBack,
					style : {
						"margin-left" : "5px",

					},

				} ],

			});
var statusClickPrintPreview = false;
var statusClickSubmit = true;
			Ext
					.get('submit')
					.on(
							'click',

							function(e) {
								if(statusClickSubmit){
								var name = Ext.getCmp('name').getValue();
								var document = Ext.getCmp('document')
										.getValue();
								var forPay = Ext.getCmp('forPay').getValue();
								var type1 = Ext.getCmp('type1').getValue();
								var type2 = Ext.getCmp('type2').getValue();
								Ext.MessageBox
										.confirm(
												'Acception',
												'คุณ'
														+ ' '
														+ name
														+ ' '
														+ 'แน่ใจว่าจะส่งเอกสารนี้ไปยังผู้ดูแล  ?',
												confirmFunction);
								}
								function confirmFunction(btn) {
									if (btn == 'yes') {
										var checkEmail = SCF003.email.getValue();
										var emailFilter=/^.+@.+\..{2,3}$/;//รูปแบบการเช็คว่าถกต้องหรือป่าว
										var str=checkEmail;
										 if (!(emailFilter.test(str))) {
												Ext.Msg.alert('Information',
												'ท่านใส่อีเมล์ไม่ถูกต้อง');
											
											}
										 else if (Ext.isEmpty(forPay)) {
											Ext.Msg.alert('Information',
													'กรุณากรอกข้อมูลเพื่อชำระ');
										}
										else if(Ext.isEmpty(Ext.getCmp('editGridDate').getValue())){
											Ext.Msg.alert('Information',
											'กรุณากรอกข้อมูลการเดินทางในตาราง');
										}else {
											param2.status = "002";
											saveOrUpdate();
											Ext.getCmp('company').setReadOnly(true);
											Ext.getCmp('company').setDisabled(true);
											Ext.get('company').setStyle('background', '#BEBEBE');
											Ext.get('company').setStyle('color', 'black');
											Ext.getCmp('antecedent').setReadOnly(true);
											Ext.getCmp('antecedent').setDisabled(true);
											Ext.get('antecedent').setStyle('background', '#BEBEBE');
											Ext.get('antecedent').setStyle('color', 'black');
											Ext.getCmp('address').setReadOnly(true);
											Ext.getCmp('address').setDisabled(true);
											Ext.get('address').setStyle('background', '#BEBEBE');
											Ext.get('address').setStyle('color', 'black');
											Ext.getCmp('antercedentA').setReadOnly(true);
											Ext.getCmp('antercedentA').setDisabled(true);
											Ext.get('antercedentA').setStyle('background', '#BEBEBE');
											Ext.get('antercedentA').setStyle('color', 'black');
											Ext.getCmp('phone').setReadOnly(true);
											Ext.getCmp('phone').setDisabled(true);
											Ext.get('phone').setStyle('background', '#BEBEBE');
											Ext.get('phone').setStyle('color', 'black');
											Ext.getCmp('email').setReadOnly(true);
											Ext.getCmp('email').setDisabled(true);
											Ext.get('email').setStyle('background', '#BEBEBE');
											Ext.get('email').setStyle('color', 'black');
											Ext.getCmp('gridEducationInfomation').setDisabled(true);
										
											Ext.getCmp('document').setReadOnly(true);
											Ext.getCmp('document').setDisabled(true);
											Ext.get('document').setStyle('background', '#BEBEBE');
											Ext.get('document').setStyle('color', 'black');
											Ext.getCmp('forPay').setReadOnly(true);
											Ext.getCmp('forPay').setDisabled(true);
											Ext.get('forPay').setStyle('background', '#BEBEBE');
											Ext.get('forPay').setStyle('color', 'black');
											
											Ext.getDom('type1').disabled = true;
											Ext.getDom('type2').disabled = true;

											Ext.getCmp('submit').disable();
											statusClickSubmit = false;
											Ext.getCmp('print').enable();
											statusClickPrintPreview = true;
										}
									}
								}
							}
							);

		Ext.get('print').on('click',function(e) {
								if(statusClickPrintPreview){
										var noDoc = Ext.getCmp('no').getValue();
										var urlPreviwPage = "/TransportationAllowance/jasperReport.pdf?docNo="+noDoc;
										var win = window.open(urlPreviwPage);
										win.focus();
								}
							});
			Ext
			.get('type1')
			.on(
					'click',
					function(e) {
						Ext.getDom('type2').checked = false;
					});
			Ext
			.get('type2')
			.on(
					'click',
					function(e) {
						Ext.getDom('type1').checked = false;
					});
			
			Ext.get('back').on('click',function(e) {
//						Ext.MessageBox.confirm('ยืนยันการทำรายการ','คุณต้องการกลับไปหน้าหลัก',confirmFunction);
//						function confirmFunction(btn) {
//							if (btn == 'yes') {
				Ext.MessageBox.show({
					title : 'ยืนยันการทำรายการ',
					msg : '<center>คุณต้องการกลับไปหน้าหลัก</center>',
					width : 200,
					buttons : Ext.MessageBox.OKCANCEL,
					animEl : 'submit',
					fn :function(btn) {
						if (btn == 'ok') {								
								var urlPreviwPage = "/TransportationAllowance/SHI002.html";
								window.location.assign(urlPreviwPage);
						}
					}
				});
			});
			
			SCF003.No.setValue(SCF01Domain.no);
			var statusPass = SCF01Domain.status;
			if(SCF01Domain.no != "AUTO"){
				SCF003.tatolPaym.setValue(SCF01Domain.tatolPaym);
				SCF003.tatolPaymA.setValue(SCF01Domain.tatolPaymA);
				SCF003.tatolPaymfullCase.setValue(SCF01Domain.tatolPaymfullCase);
				SCF003.document.setValue(SCF01Domain.document);
				SCF003.forPay.setValue(SCF01Domain.forPay);
				SCF003.totalManey.setValue(SCF01Domain.charactorNumber);
				var checkAuto = parseFloat(SCF01Domain.tatolPaymfullCase);
				if(checkAuto <= 1500){
					Ext.getDom('type1').checked = true;
					Ext.getDom('type2').checked = false;
				}
				else{
					Ext.getDom('type2').checked = true;
					Ext.getDom('type1').checked = false;
				}
				if(	statusPass == "Cancel" || statusPass == "Submitted" || statusPass == "Approved" ){
					Ext.getCmp('company').setReadOnly(true);
					Ext.getCmp('company').setDisabled(true);
					Ext.get('company').setStyle('background', '#FFFACD');
					Ext.getCmp('antecedent').setReadOnly(true);
					Ext.getCmp('antecedent').setDisabled(true);
					Ext.get('antecedent').setStyle('background', '#FFFACD');
					Ext.getCmp('address').setReadOnly(true);
					Ext.getCmp('address').setDisabled(true);
					Ext.get('address').setStyle('background', '#FFFACD');
					Ext.getCmp('antercedentA').setReadOnly(true);
					Ext.getCmp('antercedentA').setDisabled(true);
					Ext.get('antercedentA').setStyle('background', '#FFFACD');
					Ext.getCmp('phone').setReadOnly(true);
					Ext.getCmp('phone').setDisabled(true);
					Ext.get('phone').setStyle('background', '#FFFACD');
					Ext.getCmp('email').setReadOnly(true);
					Ext.getCmp('email').setDisabled(true);
					Ext.get('email').setStyle('background', '#FFFACD');
					Ext.getCmp('gridEducationInfomation').setDisabled(true);
				
					Ext.getCmp('document').setReadOnly(true);
					Ext.getCmp('document').setDisabled(true);
					Ext.get('document').setStyle('background', '#FFFACD');
					Ext.getCmp('forPay').setReadOnly(true);
					Ext.getCmp('forPay').setDisabled(true);
					Ext.get('forPay').setStyle('background', '#FFFACD');
					
					Ext.getDom('type1').disabled = true;
					Ext.getDom('type2').disabled = true;
					
					Ext.getCmp('submit').disable();
					statusClickSubmit = false;
					if(statusPass == "Cancel"){
						statusClickPrintPreview = false;
						Ext.getCmp('print').disable();
					}else{
						statusClickPrintPreview = true;
						Ext.getCmp('print').enable();
					}
					
				}
				
				SCF003.createGrid.store.reload( //  reload grid store when click search button
		                {   
		                   params:{	method : 'gridData',
		       						empId  : SCF01Domain.id,
		       						noDoc  : SCF01Domain.no}
		                  });
			}else{
				SCF003.tatolPaym.setValue(0.00);
				SCF003.tatolPaymA.setValue(0.00);
				SCF003.tatolPaymfullCase.setValue(0.00);
			}
			
			Ext.get('scfgridAddBtn').on('click',function(e) {
				addRecord();
			});
			
			SCF003.createGrid.on('keypress', function(e) {
			    if (e.keyCode === 9) {
			    	addRecord();
			       
			    }
			
		    });
			
		

});
