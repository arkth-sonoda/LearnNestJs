import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateItem1653359778782 implements MigrationInterface {
    name = 'CreateItem1653359778782'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`item\` CHANGE \`updateAt\` \`updatedAt\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`item\` DROP COLUMN \`updatedAt\``);
        await queryRunner.query(`ALTER TABLE \`item\` ADD \`updatedAt\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`item\` DROP COLUMN \`updatedAt\``);
        await queryRunner.query(`ALTER TABLE \`item\` ADD \`updatedAt\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`item\` CHANGE \`updatedAt\` \`updateAt\` varchar(255) NOT NULL`);
    }

}
