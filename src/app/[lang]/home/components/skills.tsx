'use client';
import Image from 'next/image';
import * as Tooltip from '@radix-ui/react-tooltip';

const SKILL_MAP: Record<Skill, { name: string; logo: string }> = {
  spring: { name: 'Spring/Spring Boot', logo: 'spring.png' },
  react: { name: 'React', logo: 'react.png' },
  elastic: { name: 'ElasticSearch', logo: 'elastic.png' },
  kafka: { name: 'Kafka', logo: 'kafka.png' },
  redis: { name: 'Redis', logo: 'redis.png' },
  sql: { name: 'SQL', logo: 'sql.png' },
  chakra: { name: 'ChakraUI', logo: 'chakra.png' },
  node: { name: 'NodeJS', logo: 'node.png' },
  nestjs: { name: 'NestJS', logo: 'nestjs.png' },
  socket: { name: 'WebSockets', logo: 'socket.png' },
  youtube: { name: 'Youtube Iframe and Data API', logo: 'youtube.png' },
};

type Skill = 'spring' | 'react' | 'kafka' | 'redis' | 'sql' | 'elastic' | 'chakra' | 'nestjs' | 'node' | 'socket' | 'youtube';

export default function Skills({ skillList }: { skillList: Skill[] }) {
  return (
    <div className='flex mt-5 items-center gap-3 font-bold text-content-300 flex-wrap justify-center'>
      STACK:
      <Tooltip.Provider delayDuration={800} skipDelayDuration={500}>
        <ul className='flex gap-3 flex-wrap justify-center'>
          {skillList.map((skill, index) => {
            const item = SKILL_MAP[skill];
            return (
              <li key={index}>
                <Tooltip.Root>
                  <Tooltip.Trigger>
                    <Image src={`/images/skills/${item.logo}`} className='drop-shadow-md' alt={item.name} height={30} width={30} />
                  </Tooltip.Trigger>
                  <Tooltip.Content className='bg-base-200 p-1 px-2 shadow-md rounded-lg animate-fadeInFast font-bold'>
                    {item.name}
                    <Tooltip.Arrow className='fill-base-200' />
                  </Tooltip.Content>
                </Tooltip.Root>
              </li>
            );
          })}
        </ul>
      </Tooltip.Provider>
    </div>
  );
}
