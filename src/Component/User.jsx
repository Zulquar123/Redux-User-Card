import { useDispatch, useSelector } from 'react-redux';
import Card from './Card'
import { deleteUser } from '../Store/Reducers/Slice';

export default function User() {
  const { userData } = useSelector((state) => state.userReducer);
  console.log(userData);
  const dispatch = useDispatch();
  const handleDeletebtn = (index) => {
    console.log(index);
    dispatch(deleteUser(index));
  }
  return (
    <div>
      <div className="main bg-orange-300 w-full h-screen flex justify-center items-center">
        <div className="container bg-stone-400 w-4/5 h-5/6 border-4 border-solid border-cyan-600 rounded-md flex items-center justify-between px-2 ">
          {userData.map((item, index) => (
            <Card
              value={item}
              key={index}
              index={index}
              handleDeletebtn={handleDeletebtn}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
