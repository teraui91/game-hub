import { Badge } from "@chakra-ui/react";

interface Prop {
  score: number;
}

const CriticScore = ({ score }: Prop) => {
  let color = score > 90 ? "green" : score > 80 ? "yellow" : "";
  return (
    <Badge colorScheme={color} paddingX={2} borderRadius={4}>
      {score}
    </Badge>
  );
};

export default CriticScore;
