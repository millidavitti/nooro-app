### Option 1: Use the deployed version

For a seamless experience, use can use the deployed app:  
[Nooro Task App](https://nooro-app.vercel.app/)

## Option 2. Configure Your Application

1. **Set Up Environment Variables**:  
   Create a `.env` file in your project directory and add the following line:

   ```env
   NOORO_API=<Your API endpoint>
   ```

   Replace `<Your API endpoint>` with the API endpoint from your API setup (local or deployed).

2. **Install Dependencies**:  
   Run the following command to install dependencies (assuming you're using `pnpm`):

   ```bash
   pnpm install
   ```

3. **Start the Application**:

   First, run the development server:

   ```bash
   pnpm dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---
