package com.example.demo.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
//import org.springframework.security.config.annotation.web.WebSecurityConfigurer;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.example.demo.service.UserDetailServiceImp;

@EnableWebSecurity
@Configuration
@EnableGlobalMethodSecurity(prePostEnabled=true)
public class Myconfiguration  {

	@Autowired
	private JwtAuthenticationFilter  jwtAuthentication;
	@Autowired
	private JwtAuthenticationEntryPoint unauthorizedHandler;
 	
	@Autowired
	private UserDetailServiceImp userDetailService;
	
	@Bean
	public BCryptPasswordEncoder passwordEncoder() {
	
		return new  BCryptPasswordEncoder();
	}
	
	@Bean
	public DaoAuthenticationProvider daoAuthenticationprovider() {
		
		DaoAuthenticationProvider  provider = new DaoAuthenticationProvider ();
		provider.setUserDetailsService(userDetailService);
		provider.setPasswordEncoder(passwordEncoder());
		
		return provider;
	}
	
	@Bean
	public AuthenticationManager authenticationManagerBean(AuthenticationConfiguration configuration) throws Exception {
		return configuration.getAuthenticationManager();
	}
	
	
	@Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.
              csrf()
              .disable()
              .cors()
              .disable()
              .authorizeHttpRequests()
//              Making URL of generated - token
              .antMatchers("/generate-token","/user/").permitAll()
              .antMatchers(HttpMethod.OPTIONS).permitAll()
              .anyRequest().authenticated()
              .and()
//              these will reject all unauthorized request and send a exception 
              .exceptionHandling().authenticationEntryPoint(unauthorizedHandler)
              .and()
              .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
              
//              These will check the every coming request weather it has valid header or token  
        
        
//        this filter checks information and says weather that us valid or not
        
        http.addFilterBefore(jwtAuthentication,UsernamePasswordAuthenticationFilter.class );
        http.authenticationProvider( daoAuthenticationprovider());
		return http.build();
            
    }
	
	
	


	
	

}
