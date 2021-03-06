package com.khumaloterrance.furniture.config;

import com.okta.spring.boot.oauth.Okta;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
public class OktaOAuth2WebSecurityConfigureAdapter extends WebSecurityConfigurerAdapter {


    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests()
                // Require authentication for all requests under /api/private
                .antMatchers("/api/orders/**").authenticated()
                .and()
                .oauth2ResourceServer()
                .jwt();
                // enable OAuth2/OIDC

        //CORS filters
        http.cors();
        //http response for unauthorized users
        Okta.configureResourceServer401ResponseBody(http);
        //disable cross site forgery
        http.csrf().disable();
    }
}
