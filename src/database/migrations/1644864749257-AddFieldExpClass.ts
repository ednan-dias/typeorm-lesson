import {MigrationInterface, QueryRunner} from "typeorm";

export class AddFieldExpClass1644864749257 implements MigrationInterface {
    name = 'AddFieldExpClass1644864749257'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "class" ADD "exp" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "class" DROP COLUMN "exp"`);
    }

}
