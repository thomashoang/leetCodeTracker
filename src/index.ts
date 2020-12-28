import { MikroORM } from '@mikro-orm/core';
import { __prod__ } from './constants';
import mikroConfig from './mikro-orm.config';
import { Post } from './entities/Post';

const main = async () => {
  const orm = await MikroORM.init(mikroConfig);
  const migrator = orm.getMigrator();
  await migrator.up();
};
main().catch((err) => {
  console.error(err);
});
