#definir imagem base

FROM mcr.microsoft.com/playwright:v1.49.0-jammy

#diretorio de trabalho
WORKDIR /app

#instalar o arquivo package.json 
COPY package*.json ./

# instalar dependencias
RUN npm install 

# copiar os arquivos    
COPY . .

#expor a porta  
EXPOSE 3333


#comando pa ra iniciar o app
CMD ["npm", "run", "dev"]
