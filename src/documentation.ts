import { DocumentBuilder } from "@nestjs/swagger";
export const config = new DocumentBuilder()
                        .setTitle("Mini Facebook API")
                        .setDescription("Mini Facebook backend system using Node.js and Nest.js")
                        .setVersion("0.0.0")
                        .addCookieAuth('optional-session-id')
                        .addTag("")
                        .build();
