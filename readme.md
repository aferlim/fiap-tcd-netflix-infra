# MBA -DevOps Engineering - INTEGRATION ARCHITECTURE

**TCD** - Trabalho de Conclusão de Disciplina - 1DVP / MICROSERVICES ARCHITECTURE / API / CONTAINERS / TADEU D’ALESSANDRO BARBOSA.

# Case Netflix

# Infrastructure As a Code

Este arquivo descreve como subir o datacenter TCD Netflix

> **Passo 1:** Subindo a infrastrutura:

    docker-compose up

> **Passo 2:** Visualizar filmes de um determinado gênero:

Movie API: GET - /movie/byGenre/{genre}
_Obs: Na api de gêneros contêm apenas a lista de gêneros_

> **Passo 3:** Visualizar detalhes de um filme:

**Movie API:GET** - /movie

> **Passo 4:** Possibilidade de votar nos filmes que mais gostei:

**Rating API: POST** - /rating

**Apache Kafka**

A - Ao enviar uma votação, uma mensagem é enviada ao Kafka.

B - Um Worker (Rating Worker) processa a mensagem e envia uma chamada para a api de filmes.

C - A Api de Rating mantém o histórico de votações.

D - A Api de filmes mantém um consolidado das votações.

> **Passo 5:** Possibilidade de marcar um filme ou série para ser visto no futuro:

...em construção

> **Passo 6:** Possibilidade de buscar um filme por palavra-chave:

**Movie API: GET** - /movie/getByTag/{tag}

> **Passo 7:** Possibilidade de exibir os filmes mais vistos por categorias:

​**Movie API: GET** - /movie​/mostByGenre​/{genre}
_Obs: Na api de gêneros contêm apenas a lista de gêneros_

> **Passo 8:** Possibilidade de abrir um chamado técnico de algum problema que está acontecendo:

**HelpCenter API.**

> **Passo 9:** PPossibilidade de visualizar os filmes e séries que já foram assistidos:

_Assistir um filme:_

**Movie API: PUT** - /watch

_Assistidos por usuário:_

**Movie API: GET** - /watch

## Serviços relacionados e seus repositórios:

Movies API: https://github.com/aferlim/fiap-tct-netflix-movies

Rating API: https://github.com/aferlim/fiap-tcd-netflix-rating-api

Rating Worker: https://github.com/aferlim/fiap-tcd-netflix-rating-worker

Genres API: https://github.com/laerccius/genre-api

HelpCenter API: https://github.com/laerccius/help-center-api

## Validando as regras de service discovery

Para validar as regras de service discovery, acesse o painel administração do consul:

    http://localhost:85000

Acesse o Menu Services e clique no serviço desejado.
O Consul mostrará quantas instâncias está rodando para o mesmo DNS.

### Verificando o DNS com o comando DIG

Ainda com o datacenter rodando, acesse o container em modo bash com o comando:

    docker-compose exec rating_api_1 /bin/sh

O OS utilizado é o Alpine, um container linux mais leve. Nele não vem instalado o DIG. Para instalar, já no bash dentro do container, execute:

    curl -L https://github.com/sequenceiq/docker-alpine-dig/releases/download/v9.10.2/dig.tgz|tar -xzv -C /usr/local/bin/

Por último, execute o commando dig para vizualização das configurações de DNS:

    dig @localhost -p 53 rating-api.service.consul SRV

![Consul DNS API Rating](/doc/consul-dns.jpeg)

## Outros comandos

Comandos usuais após todo o datacenter iniciado

> Listando o binding do servidor Zookeeper

    docker-compose logs zoo1 | grep -i binding

> Verificando a saúde do Kafka

    docker-compose logs kafka1 | grep -i started

> Criando tópicos no Kafka

    docker-compose exec kafka1 kafka-topics \
    --create --topic rating-topic --partitions 1 \
    --replication-factor 1 --if-not-exists \
    --zookeeper zoo1:2181

## Por

André Ferreira Lima - github.com/aferlim

Laerccius Moraes Santana
