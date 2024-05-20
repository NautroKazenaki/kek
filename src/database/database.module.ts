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
        `),
        db.run(`
        CREATE TABLE IF NOT EXISTS Products (
          id INTEGER PRIMARY KEY,
          productName TEXT,
          includedDetails TEXT,
          createLimit INTEGER
        )
        `),
        db.run(`
        CREATE TABLE IF NOT EXISTS Orders (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          startDate TEXT NOT NULL,
          endDate TEXT DEFAULT NULL,
          isDone INTEGER DEFAULT 0,
          userName TEXT NOT NULL,
          includedProducts TEXT NOT NULL,
          orderTo TEXT
      )
        `),
        db.run(`
        CREATE TABLE IF NOT EXISTS ManufacturingStatus (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          orderId INTEGER NOT NULL,
          productId INTEGER NOT NULL,
          manufactured INTEGER DEFAULT 0,
          FOREIGN KEY (orderId) REFERENCES Orders(id),
          FOREIGN KEY (productId) REFERENCES Products(id)
      )
        `),
        db.run(`
        CREATE TABLE IF NOT EXISTS ProductsInDevelopment (
          id INTEGER ,
          productName TEXT,
          part INTEGER,
          manufacturer TEXT,
          startDateOfManufacturer TEXT PRIMARY KEY,
          endDateOfManufacturer TEXT DEFAULT NULL,
          comments TEXT ARRAY,
          additionalDetails JSON ARRAY,
          phase INTEGER,
          partOfOrder INTEGER
      )
        `)
    })
  }


}