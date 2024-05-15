import { Module, OnModuleInit } from "@nestjs/common";
import * as sqlite3 from "sqlite3";
import { DatabaseService } from "./database.service";

@Module({
  providers: [DatabaseService],
  exports: [DatabaseService],
})

export class DatabaseModule implements OnModuleInit {
  constructor(private readonly databaseService: DatabaseService) { }

  async onModuleInit() {
    const db = new sqlite3.Database('database.db')
    db.serialize(() => {
      db.run(`
            CREATE TABLE IF NOT EXISTS users (
              id INTEGER PRIMARY KEY,
              name TEXT,
              password TEXT,
              level INTEGER
            )
          `),
        db.run(`
          CREATE TABLE IF NOT EXISTS providers (
            id INTEGER PRIMARY KEY,
            name TEXT, 
            error_count INTEGER)
          `),
        db.run(`
          CREATE TABLE IF NOT EXISTS AcceptanceDB (
            id INTEGER PRIMARY KEY,
            userName TEXT,
            date TEXT,
            productName TEXT,
            quantity INTEGER,
            provider TEXT,
            acceptanceNumber INTEGER
          )
        `),
        db.run(`
          CREATE TABLE IF NOT EXISTS Details (
            id INTEGER PRIMARY KEY,
            detailName TEXT,
            quantity INTEGER,
            provider TEXT,
            included TEXT
          )
        `)
    })
  }


}