/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.jsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: "postgresql://accounts:tqmfb6U1aEko@ep-white-bush-a5v7vlaq.us-east-2.aws.neon.tech/expense-tracker?sslmode=require"
    }
  }; 