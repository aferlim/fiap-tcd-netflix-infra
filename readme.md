# MBA -DevOps Engineering - INTEGRATION ARCHITECTURE

**TCD** - Trabalho de Conclusão de Disciplina - 1DVP / MICROSERVICES ARCHITECTURE / API / CONTAINERS / TADEU D’ALESSANDRO BARBOSA.

# Case Netflix

# Infrastructure As a Code

Este arquivo descreve como subir o datacenter TCD Netflix

> **Passo 1:** Subindo a infrastrutura:

    docker-compose up

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
