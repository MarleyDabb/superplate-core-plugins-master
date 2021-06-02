<% if(answers.providers.includes('mongodb') ) { %>
  import {MongoClient} from 'mongodb';

  async function connectToDatabase() {
      const client = await MongoClient.connect(process.env.DB);

      return client;
  }

  export default connectToDatabase;
<% } %>
