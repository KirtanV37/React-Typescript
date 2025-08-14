import KeyType from "./components/KeyType";

const App = () => {
  return <KeyType />;
};

export default App;

/*
  const handleUserSelect = (id: number, name: string) => {
    console.log(`User selected: ${name} (ID: ${id})`);
  };

  const adminData = {
    permissions: ["read", "write", "delete"],
    level: 10,
  };

  return (
    <div>
      <UserCard
        name="K"
        data={adminData}
        onSelect={handleUserSelect}
        role="admin"
        age={23}
      />
    </div>
*/

/*
 <CounterProvider>
      <Counter />
    </CounterProvider>
 */

/*

const [show, setShow] = useState(false);
return(
 <>
      <button onClick={() => setShow(true)}>Open Modal</button>
      {show && <Modal onClose={() => setShow(false)}>Hello from Portal!</Modal>}
    </>
)

     */
