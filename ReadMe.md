in DB folder run postgres and create app_db
% docker compose up

prisma schema i sin prisma folder
- Set the `DATABASE_URL` in your `.env` file.
- Run `npx prisma generate` to generate the client.
- Run `npx prisma db push` (for prototyping) or `npx prisma migrate dev` (for proper migrations) to 

