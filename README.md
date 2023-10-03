# Nome do Projeto

Descrição curta do seu projeto.

## Pré-requisitos

Certifique-se de ter os seguintes requisitos instalados antes de começar:

- Node.js e npm instalados
- PostgreSQL instalado e configurado
- Maven instalado

## Configuração do Banco de Dados

Execute os seguintes comandos SQL para criar as tabelas necessárias no PostgreSQL:

```sql
CREATE TABLE IF NOT EXISTS public.post
(
    id integer NOT NULL DEFAULT nextval('post_id_seq'::regclass),
    titulo character varying(100) COLLATE pg_catalog."default",
    conteudo text COLLATE pg_catalog."default",
    data_publicacao timestamp without time zone,
    autor_id integer,
    CONSTRAINT post_pkey PRIMARY KEY (id),
    CONSTRAINT post_autor_id_fkey FOREIGN KEY (autor_id)
        REFERENCES public.usuario (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
);

CREATE TABLE IF NOT EXISTS public.post_comentario
(
    id integer NOT NULL DEFAULT nextval('post_comentario_id_seq'::regclass),
    id_post integer,
    id_autor integer,
    comentario text COLLATE pg_catalog."default",
    data_cadastro timestamp without time zone,
    CONSTRAINT pessoa_comentario_pkey PRIMARY KEY (id),
    CONSTRAINT pessoa_comentario_id_fkey FOREIGN KEY (id_autor)
        REFERENCES public.usuario (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT post_comentario_fkey FOREIGN KEY (id_post)
        REFERENCES public.post (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
);

CREATE TABLE IF NOT EXISTS public.usuario
(
    id integer NOT NULL DEFAULT nextval('usuario_id_seq'::regclass),
    nome character varying(50) COLLATE pg_catalog."default",
    email character varying(100) COLLATE pg_catalog."default",
    senha character varying(100) COLLATE pg_catalog."default",
    CONSTRAINT usuario_pkey PRIMARY KEY (id)
);
```
## Configuração do Projeto Frontend
Navegue até a pasta frontend do projeto e execute o seguinte comando para instalar as dependências: npm install

#Execução
Após configurar o banco de dados e as dependências do frontend e backend, você pode iniciar o projeto. Primeiro, inicie o servidor backend e, em seguida, o servidor frontend.
