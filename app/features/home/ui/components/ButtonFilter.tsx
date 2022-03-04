import { Button, Image } from "@chakra-ui/react";
import filterIcon from "~/shared/assets/icon/filter-icon.svg";

type Props = {
  onClick?: any;
};

const ButtonFilter = ({ onClick }: Props) => {
  return (
    <Button variant="ghost" onClick={onClick}>
      <Image src={filterIcon} alt="filter-icon" />
    </Button>
  );
};

export default ButtonFilter;
