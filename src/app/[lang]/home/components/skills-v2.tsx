"use client";
import Image from "next/image";
import * as Tooltip from "@radix-ui/react-tooltip";
import { printIf } from "@/app/components/utils/ClassUtils";

const SKILL_MAP: Record<Skill, { name: string; logo: string }> = {
  spring: { name: "Spring/Spring Boot", logo: "spring.png" },
  react: { name: "React", logo: "react.png" },
  elastic: { name: "ElasticSearch", logo: "elastic.png" },
  kafka: { name: "Kafka", logo: "kafka.png" },
  redis: { name: "Redis", logo: "redis.png" },
  sql: { name: "SQL", logo: "sql.png" },
  chakra: { name: "ChakraUI", logo: "chakra.png" },
  node: { name: "NodeJS", logo: "node.png" },
  nestjs: { name: "NestJS", logo: "nestjs.png" },
  socket: { name: "WebSockets", logo: "socket.png" },
  youtube: { name: "Youtube Data API", logo: "youtube.png" },
  typescript: { name: "Typescript", logo: "typescript.png" },
  java: { name: "Java", logo: "java.png" },
  dotnet: { name: ".NET", logo: "dotnet.png" },
  rabbitmq: { name: "RabbitMQ", logo: "rabbitmq.png" },
};

export type Skill =
  | "spring"
  | "java"
  | "typescript"
  | "react"
  | "kafka"
  | "redis"
  | "sql"
  | "elastic"
  | "chakra"
  | "nestjs"
  | "node"
  | "socket"
  | "youtube"
  | "dotnet"
  | "rabbitmq";

export default function SkillsV2({ skillList, className }: { skillList: Skill[], className?: string}) {
  return (
    <ul className={`flex gap-3 flex-wrap text-content-300 font-bold ${printIf(className, !!className)}`}>
      {skillList.map((skill, index) => {
        const item = SKILL_MAP[skill];
        return (
          <li key={index} className="flex items-center gap-2">
            <Image
              src={`/images/skills/${item.logo}`}
              className="drop-shadow-md"
              alt={item.name}
              height={30}
              width={30}
            />

            {item.name}
          </li>
        );
      })}
    </ul>
  );
}
