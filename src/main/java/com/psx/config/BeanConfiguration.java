package com.psx.config;

import java.util.Properties;

import org.apache.commons.dbcp2.BasicDataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.JpaVendorAdapter;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;
import org.springframework.transaction.PlatformTransactionManager;

@Configuration
public class BeanConfiguration {

	@Autowired
	Environment env;

	@Bean(name = "entityManagerFactory")
	public LocalContainerEntityManagerFactoryBean getEntityManagerFactoryBean() {
		LocalContainerEntityManagerFactoryBean lcemfb = new LocalContainerEntityManagerFactoryBean();
		lcemfb.setJpaVendorAdapter(getJpaVendorAdapter());
		lcemfb.setDataSource(basicDataSource());
		lcemfb.setPersistenceUnitName("myJpaPersistenceUnit");
		lcemfb.setPackagesToScan("com.psx.*");
		lcemfb.setJpaProperties(new Properties());
		return lcemfb;
	}

	@Bean(name = "transactionManager")
	public PlatformTransactionManager txManager() {
		return new JpaTransactionManager(getEntityManagerFactoryBean().getObject());
	}

	@Bean
	public JpaVendorAdapter getJpaVendorAdapter() {
		return new HibernateJpaVendorAdapter();
	}

	public BasicDataSource basicDataSource() {
		return getDataSource(env.getProperty("database.driverClassName"), env.getProperty("database.url"),
				env.getProperty("database.userName"), env.getProperty("database.password"),
				Integer.parseInt(env.getProperty("database.maxTotalConnections")),
				Integer.parseInt(env.getProperty("database.maxIdleConnections")));
	}

	private BasicDataSource getDataSource(String className, String url, String userName, String password, int maxTotal,
			int maxIdle) {
		BasicDataSource basicDataSource = new BasicDataSource();
		basicDataSource.setDriverClassName(className);
		basicDataSource.setUrl(url);
		basicDataSource.setUsername(userName);
		basicDataSource.setPassword(password);
		if (env.getProperty("enableAutocommit") == null) {
			basicDataSource.setDefaultAutoCommit(false);
		} else {
			basicDataSource.setDefaultAutoCommit(Boolean.parseBoolean(env.getProperty("enableAutocommit")));
		}
		basicDataSource.setMaxTotal(maxTotal);
		basicDataSource.setMaxIdle(maxIdle);
		return basicDataSource;
	}
}
