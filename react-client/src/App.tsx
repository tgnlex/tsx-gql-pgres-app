import { User } from './types/main.ts';
import UserDisplay from './components/UserDisplay'
function App() {
  const users: User[] = [{
    name: 'Peace',
    messages: [{
      body: 'Im learning GraphQL'
    }, {
      body: 'With TSX, Prisma, postgres and gql-yoga.'
    }]
  }]
  return (
    <div className="bg-zinc-800 flex-col h-screen w-full flex items-center justify-center p-4 gap-y-12 overflow-scroll">
     {
      users.map((user, i) => <UserDisplay user={user} key={i} />)
     }
    </div> 
  )
}

export default App
