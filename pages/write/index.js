import { gql, useMutation } from "@apollo/client";
import DreamForm from "../../components/form/form.component";
import Modal from "../../components/modal/modal.component";

const Mutation = gql`
  mutation Mutation(
    $name: String
    $email: String
    $time: String
    $dreamName: String
    $description: String
  ) {
    newDream(
      name: $name
      email: $email
      time: $time
      dreamName: $dreamName
      description: $description
    ) {
      name
      email
      time
      dreamName
      description
      _id
    }
  }
`;

const WriteDream = () => {
  const [createDream, { data, loading, err }] = useMutation(Mutation);

  console.log(data);

  return (
    <>
      {data ? (
        <Modal dream={data.newDream} message={"Success"} />
      ) : (
        // <DreamItem data={data.newDream} />
        <DreamForm sendHandler={createDream}></DreamForm>
      )}
    </>
  );
};

export default WriteDream;
