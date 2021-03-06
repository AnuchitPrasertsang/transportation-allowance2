package com.spt.tsa.dao.Impl;

import java.util.List;

import javassist.expr.Cast;

import org.hibernate.Criteria;
import org.hibernate.HibernateException;
import org.hibernate.SQLQuery;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.CriteriaQuery;
import org.hibernate.criterion.DetachedCriteria;
import org.hibernate.criterion.Order;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;
import org.springframework.stereotype.Repository;
















import com.spt.tsa.dao.AccountAdmin01Dao;
import com.spt.tsa.entity.*;

@Repository
public class AccountAdmin01DaoImpl extends HibernateDaoSupport implements AccountAdmin01Dao {
    @Autowired
    public AccountAdmin01DaoImpl(SessionFactory sessionFactory){
   	 super.setSessionFactory(sessionFactory);
    }
    
    public List<AccountAdmin> findAccountAdmin() {
    	DetachedCriteria criteria =  DetachedCriteria.forClass(AccountAdmin.class);  
    	criteria.addOrder(Order.desc("codeLong"));
    	return this.getHibernateTemplate().findByCriteria(criteria);
    }

	public List<AccountAdmin> findByCode(String code) {
		DetachedCriteria criteria =  DetachedCriteria.forClass(AccountAdmin.class);
		 				 criteria.add(Restrictions.eq("code", code));
    	return this.getHibernateTemplate().findByCriteria(criteria);
	}

	public void deleteByAccountId(AccountAdmin accountAdmin) {
		this.getHibernateTemplate().delete(accountAdmin);		
	}

	public void saveOrUpdate(AccountAdmin accountAdmin) {
		this.getHibernateTemplate().saveOrUpdate(accountAdmin);		
	}

	public List<AccountAdmin> queryOrderById() {
		Session session = (Session) this.getSession();
		StringBuffer sql = new StringBuffer();
		sql.append("SELECT * FROM account_admin order by TO_NUMBER(accad_acid) desc");
		SQLQuery query = session.createSQLQuery(sql.toString());
		List<AccountAdmin> results = query.list();
		session.close();
		return results;		
		
	}
	
	public AccountAdmin findAccountAdminWhereId(String domain){
		   return this.getHibernateTemplate().get(AccountAdmin.class,domain);
	   }
   
}