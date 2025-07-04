import pkg from '@vendia/serverless-express';
const { createServerlessExpress } = pkg;

export function createServerlessHandler(app) {
  return createServerlessExpress({ app });
}
