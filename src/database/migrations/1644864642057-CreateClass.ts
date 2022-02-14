import { MigrationInterface, QueryRunner } from 'typeorm';

export default class CreateClass1644864642057 implements MigrationInterface {
  name = 'CreateClass1644864642057';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "class" ("id" uuid NOT NULL, "name" character varying NOT NULL, "duration" integer NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_0b9024d21bdfba8b1bd1c300eae" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "class"`);
  }
}
