// @ts-nocheck
import { createServer } from "miragejs";
import { Factory, Model } from "miragejs";
import { faker } from "@faker-js/faker";

const TOPIC_COUNT = 10;
const callStatus = ["positive", "negative", "neutral"];
const callTopics = Array.from({ length: TOPIC_COUNT }, () =>
  faker.word.noun({ length: { min: 5, max: 7 }, strategy: "closest" })
);

function generateNumberBetween(min, max) {
  return faker.datatype.number({ min, max });
}

function initializeServer() {
  createServer({
    seeds(server) {
      server.createList("record", 300);
      server.create("user", {
        fullName: "Admin",
        email: "admin@example.com",
        password: "admin",
      });
    },
    routes() {
      this.namespace = "/api";
      this.get("/records", (schema) => {
        return schema.records.all();
      });
    },
    models: {
      user: Model,
      record: Model,
    },
    factories: {
      record: Factory.extend({
        name() {
          return faker.name.fullName();
        },
        callID() {
          return faker.datatype.number({ min: 100000, max: 999999 });
        },
        duration() {
          return faker.datatype.number({ min: 120000, max: 1800000 });
        },
        date() {
          return faker.date.between(
            "2020-01-01T00:00:00.000Z",
            "2023-01-01T00:00:00.000Z"
          );
        },
        time() {
          return new Date(this.date).toLocaleTimeString("en-GB");
        },
        phoneNumber() {
          return faker.phone.number("###-###-###");
        },
        text() {
          const sentencesCount = Math.ceil(2 + Math.random() * 10);
          return faker.lorem.sentences(sentencesCount);
        },
        words() {
          return this.text.split(/\s+/).length;
        },
        status() {
          return callStatus[generateNumberBetween(0, callStatus.length - 1)];
        },
        topic() {
          return callTopics[generateNumberBetween(0, callTopics.length - 1)];
        },
        avatar() {
          return faker.image.avatar();
        },
      }),
    },
  });
}

export default initializeServer;
