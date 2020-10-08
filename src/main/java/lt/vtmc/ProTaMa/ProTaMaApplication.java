package lt.vtmc.ProTaMa;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;


@EnableSwagger2
@SpringBootApplication
public class ProTaMaApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProTaMaApplication.class, args);
	}
	
	private static final Logger log = LoggerFactory.getLogger(ProTaMaApplication.class);
	
	@Bean
	public Docket swaggerDocket() {
		return new Docket(DocumentationType.SWAGGER_2).apiInfo(apiInfo()).select()
				.apis(RequestHandlerSelectors.basePackage("lt.vtmc.ProTaMa")).build();
	}

	private ApiInfo apiInfo() {
		return new ApiInfoBuilder().title("Protama system Documentation").version("0.0.1-SNAPSHOT").build();
	}
	

}






