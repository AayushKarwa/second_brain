import { useState } from "react";
import Button from "./components/Button";
import Card from "./components/Card";
import CreateContentModel from "./components/CreateContentModel";
import { PlusIcon } from "./components/Icons/PlusIcon";
import { ShareIcon } from "./components/Icons/ShareIcon";

function App() {
  const [modalOpen,setModalOpen] = useState(true)
  return (
    <div className="p-4 ">
      
      <CreateContentModel open={modalOpen} onClose={()=>{setModalOpen(false)}}/>
        <div className="flex justify-end gap-2">
        <Button
          variant="secondary"
          text="Add content"
          startIcon={<PlusIcon />}
        />
        <Button
          variant="primary"
          text="Share Brain"
          startIcon={<ShareIcon />}
        />
        </div>
       

        <div className="flex gap-3">
          <Card
            type="twitter"
            link="https://x.com/TrumpUpdateHQ/status/1863172738292351067"
            title="github tweet"
          />

          <Card
            type="youtube"
            link="https://www.youtube.com/watch?v=zA9r5zTllx4"
            title="piyush garg new video"
          />
          <Card
            type="youtube"
            link="https://youtu.be/1RXXGLyQ85M?si=NhlUhlCWh8ESCWN0"
            title="piyush garg new video"
          />
        </div>
      
    </div>
  );
}

export default App;
