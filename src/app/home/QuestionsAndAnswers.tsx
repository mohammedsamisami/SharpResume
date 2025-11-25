/**
 * SharpResume – Questions & Answers Section
 * 
 * Mini Project by Mohammed Sami and Team
 * Navodaya Institute of Technology
 */

import { Link } from "components/documentation";

const QAS = [
  {
    question:
      "Q1. What is a resume builder? Why is a resume builder better than a resume template document?",
    answer: (
      <>
        <p>
          There are two main ways to create a resume today. One is to use a
          resume template, such as an office or Google document, and customize
          it according to your needs. The other is to use a resume builder, an
          online tool that allows you to enter your information and
          automatically generates a professional resume.
        </p>
        <p>
          Using a resume template requires manual formatting work, like copying
          and pasting text sections and adjusting spacing, which can be
          time-consuming and error-prone. It’s easy to run into formatting
          issues such as inconsistent bullet points or font styles. In contrast,
          a resume builder like <strong>SharpResume</strong> saves time and
          prevents formatting mistakes by automatically handling the layout. It
          also allows users to easily adjust font types or sizes with a single
          click. In short, a resume builder is simpler and more convenient than
          a traditional template.
        </p>
      </>
    ),
  },
  {
    question:
      "Q2. What uniquely sets SharpResume apart from other resume builders and templates?",
    answer: (
      <>
        <p>
          There are several great free resume builders available, such as{" "}
          <Link href="https://rxresu.me/">Reactive Resume</Link> and{" "}
          <Link href="https://flowcv.com/">FlowCV</Link>. However,
          <strong> SharpResume </strong> stands out with two key features:
        </p>
        <p>
          <span className="font-semibold">
            1. SharpResume is designed for best professional practices.
          </span>
          <br />
          Unlike many resume builders that focus on global customization,
          SharpResume focuses on providing clean and effective resume layouts
          that highlight the most important sections: profile, work experience,
          education, and skills. It avoids unnecessary sections that clutter the
          document and uses a single-column layout that is compatible with most
          application tracking systems (ATS).
        </p>
        <p>
          <span className="font-semibold">
            2. SharpResume prioritizes user privacy.
          </span>
          <br />
          SharpResume allows users to build and store resumes locally in their
          browser without requiring an account. Your data stays private and only
          accessible to you.
        </p>
      </>
    ),
  },
  {
    question: "Q3. Who created SharpResume and why?",
    answer: (
      <p>
        <strong>SharpResume</strong> was created by <strong>Mohammed Sami and
        Team</strong> as a mini project for their college,{" "}
        <strong>Navodaya Institute of Technology</strong>. The idea was to design
        a simple, modern, and privacy-focused resume builder that helps students
        and professionals easily create resumes that follow standard best
        practices and make job applications more confident and effective.
      </p>
    ),
  },
  {
    question: "Q4. How You can support SharpResume",
    answer: (
      <>
        <p>
          You can support <strong>SharpResume</strong> by sharing it with your
          friends, classmates, or on social media. Spreading the word helps more
          students and job seekers discover this tool and create professional
          resumes easily. Your support in sharing is what helps the project grow
          and reach more people who need it.
        </p>
      </>
    ),
  },
];

export const QuestionsAndAnswers = () => {
  return (
    <section className="mx-auto max-w-3xl divide-y divide-gray-300 lg:mt-4 lg:px-2">
      <h2 className="text-center text-3xl font-bold">Questions & Answers</h2>
      <div className="mt-6 divide-y divide-gray-300">
        {QAS.map(({ question, answer }) => (
          <div key={question} className="py-6">
            <h3 className="font-semibold leading-7">{question}</h3>
            <div className="mt-3 grid gap-2 leading-7 text-gray-600">
              {answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
