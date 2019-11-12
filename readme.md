# MBA -DevOps Engineering - INTEGRATION ARCHITECTURE

**TCD** - Trabalho de Conclusão de Disciplina - 1DVP / MICROSERVICES ARCHITECTURE / API / CONTAINERS / TADEU D’ALESSANDRO BARBOSA.

# Case Netflix

# Infrastructure As a Code

Este arquivo descreve como subir o datacenter TCD Netflix

> **Passo 1:** Subindo a infrastrutura:

    docker-compose up

> **Passo 2:** Visualizar filmes de um determinado gênero:

...em construção

> **Passo 3:** Visualizar detalhes de um filme:

...em construção

> **Passo 4:** Visualizar detalhes de um filme:

...em construção

> ...

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
