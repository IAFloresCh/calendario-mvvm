function DeleteObjectiveViewModel({ objectives, onDeleteObjective }) {
    const [objectivesData, setObjectivesData] = useState(objectives.map(user => ({
      id: user.id,
      name: user.name,
      age: user.age,
      email: user.email,
    })));
  
    const handleDeleteObjectives = id => {
      onDeleteUser(id);
      setObjectivesData(userData.filter(user => user.id !== id));
    };
  
    return (
      <UserList
        objectives={objectivesData}
        onDeleteUser={handleDeleteObjectives}
      />
    );
  }
  
  export default DeleteObjectiveViewModel;