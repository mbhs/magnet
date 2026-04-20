"use client";

import Image from "next/image";
import { Button, Link, Table} from '@heroui/react';

const achievementRows = [
  {
    achievement: "30-50% of seniors annually awarded National Merit Scholarship Semifinalists",
    year: "-",
  },
  {
    achievement: "Davidson Fellowship Winners",
    year: "2012, 2014, 2016, 2018, 2019, 2021 & 2024",
  },
  {
    achievement: "US Presidential Scholar Winners",
    year: "2010, 2011, 2012, 2014, 2018 & 2022",
  },
  {
    achievement: "Twenty-seven Regeneron Scholars",
    year: "2019-2025",
  },
  {
    achievement: "Gold or Silver Medalists, International Physics Olympiad",
    year: "2011, 2013, 2014, 2015 & 2018",
  },
  {
    achievement: "Gold Medalist, International Biology Olympiad",
    year: "2025",
  },
  {
    achievement: "Gold Medalist, International Chemistry Olympiad",
    year: "2024",
  },
  {
    achievement: "Gold Medalist, European Girls Olympiad in Informatics",
    year: "2021",
  },
  {
    achievement: "Putnam Fellow",
    year: "2021",
  },
  {
    achievement: "It’s Academic Champion",
    year: "2017-2019",
  },
  {
    achievement: "Top student in the UMD Mathematics Competition",
    year: "2015-2023",
  },
  {
    achievement: "Top three finshers NYU Tanden School of Engineering cybersecurity competition (winners in 2017 & 2019)",
    year: "2016-2019",
  },
];

export default function About() {
  return (
    <div className="h-[100%] w-[100%]" style={{ background: 'linear-gradient(to bottom, #460809 80%,  #230405)' }}>
      <div className = "flex justify-center items-center h-screen">
        <div  className="wrapper relative overflow-clip w-6xl h-full w-full flex justify-center items-left z-10 flex-col px-10 before:absolute before:h-[60%] before:w-[40%] before:animate-[blob_30s_infinite_linear] before:rounded-full before:bg-red-900 before:opacity-40 before:blur-[60px] after:absolute after:h-[80%] after:w-[60%] after:animate-blob-reverse after:rounded-full after:bg-red-900 after:opacity-40 after:animate-[blob_20s_infinite_linear_reverse] after:left-[50%] after:top-[50%] after:blur-[60px] overflow-y-visible">
          <p className="z-10 text-white font-bold text-[60px]/20">About the Magnet</p>
          <p className="z-10 text-[20px]/20 text-[#cccccc]">Welcome to the STEM Magnet Program at Montgomery Blair High School.</p>
          <div className="flex flex-row gap-4"><Button className="z-10 bg-[#7f1d1d]" size="lg">Learn More</Button><Button className="z-10 bg-white text-[#7f1d1d]" size="lg">Apply</Button></div>
        </div>
      </div>

      {/* descriptions */}
      <div className="min-h-screen h-full w-full p-16 flex justify-center items-center">
        <p className="font-bold text-white text-[32px] text-center">In 1985, Montgomery County Public Schools opened its Science, Mathematics, and Computer Science Magnet Program within Montgomery Blair High School in Silver Spring, Maryland. </p>
      </div>
      <div className="min-h-screen h-full w-full p-16 flex justify-center items-center">
        <p className="font-bold text-white text-[32px] text-center">The Magnet Program is designed to offer accelerated, interdisciplinary courses in science, mathematics, and computer science for highly able students particularly interested in these subjects.</p>
      </div>
      <div className="min-h-screen h-full w-full p-16 flex justify-center items-center flex flex-col gap-4 ">
        <p className="font-bold text-white text-[32px] text-center w-[80%]">Since Magnet students have a number of extra academic requirements, magnet students have an eight-period day, instead of the normal seven-period day of most county high school students.</p>
        <p className="font-bold text-[#cccccc] text-[20px] text-center w-[80%]">Magnet students can (and do!) take full advantage of Blair's other extracurriculars such as athletics, student clubs, the school's bands and plays, and other activities.</p>
        <Button className="bg-[#7f1d1d]" size="md">Learn More</Button>
      </div>

      

      {/* current news */}
      <div className="min-h-screen h-full w-full py-[15%] px-16 flex justify-center items-center z-40">
        <div style={{ background: "linear-gradient(to bottom, rgba(127,29,29,0.2)" }} className="flex justify-center w-[85%] rounded-2xl h-[100%] min-h-[90vh] shadow-xl">
          <div className="h-[100%] my-16 mx-12 flex flex-col justify-center items-center">
            <h1 className="font-bold text-[50px]/16 text-[#eeeeee] text-center">MAGNET ACHEIVEMENTS</h1>
            <span className="my-10 w-[80%] border-1 border-white"></span>

            <Table>
               <Table.Content aria-label="Team members" className="min-w-[600px]">
                <Table.Header>
            <Table.Column isRowHeader>Acheivement</Table.Column>
            <Table.Column>Year</Table.Column>
          </Table.Header>
          <Table.Body>
            {achievementRows.map((row, index) => (
              <Table.Row key={`${row.achievement}-${row.year}-${index}`}>
                <Table.Cell>{row.achievement}</Table.Cell>
                <Table.Cell>{row.year}</Table.Cell>
              </Table.Row>
            ))}


            </Table.Body>
               </Table.Content>
            </Table>

          </div>
        </div>
        
      </div>

    </div>
  );
}

// after:absolute after:h-[50%] after:w-[50%] after:animate-blob-reverse after:rounded-full after:bg-red-800 
