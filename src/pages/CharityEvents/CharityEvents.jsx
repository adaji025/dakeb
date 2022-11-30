import { TextInput, Grid } from "@mantine/core";
import { AiOutlineSearch } from "react-icons/ai";
import EventCard from "../../components/EventCard/EventCard";
import { events } from "../../data/data";
import styles from "../Services/Service.module.css";

const CharityEvents = () => {
  return (
    <>
      <div className={styles.serviceContainer}>
        <div className="w-full flex items-center justify-center h-full text-center">
          <h2 className="text-5xl text-primary-yellow font-semibold mt-20 z-10">
            Become a beef hunter
          </h2>
        </div>
      </div>

      <div className="my-20 max-w-[1440px] mx-auto p-4">
        <div className="max-w-[1320px] w-full mx-auto">
          <div className="flex justify-between items-center">
            <span className="text-xl text-primary-green-50 font-semibold">
              Events
            </span>
            <TextInput
              icon={<AiOutlineSearch />}
              radius="xl"
              className=""
              placeholder="Search"
            />
          </div>
        </div>
        <div className="mt-5">
          <Grid grow gutter="xl" className="w-full flex justify-center">
            {events.map((item, idx) => (
              <Grid.Col sm={6} lg={4} className="flex justify-center">
                <EventCard {...{ item }} key={idx} />
              </Grid.Col>
            ))}
          </Grid>
        </div>
      </div>
    </>
  );
};

export default CharityEvents;
