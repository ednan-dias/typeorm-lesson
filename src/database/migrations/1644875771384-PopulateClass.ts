import { MigrationInterface, QueryRunner } from 'typeorm';

export default class PopulateClass1644875771384 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "INSERT INTO class (name, duration) VALUES ('Engenharia de Software', 60)",
    );
    await queryRunner.query(
      "INSERT INTO class (name, duration) VALUES ('Engenharia de Software II', 60)",
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "DELETE FROM class WHERE name = 'Engenharia de Software'",
    );
    await queryRunner.query(
      "DELETE FROM class WHERE name = 'Engenharia de Software II'",
    );
  }
}
