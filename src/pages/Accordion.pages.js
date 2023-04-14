import React, { Fragment } from 'react';
import Accordion from '../components/ui/Accordion/Accordion';

function AccordionPage() {
  const items = [
    {
      id: '1',
      label: 'Can I use React on a project?',
      content:
        'You can use React on any project you want. Because React is really a good tool and give performance and really good user experience.',
    },
    {
      id: '2',
      label: 'Can I use Javascript on a project?',
      content:
        'Javascript is powerfull and amazing , you have to use it everywhere, there is a lot of library for it and you can do really all that you want to do with it.',
    },
    {
      id: '3',
      label: 'Can I use CSS(or SASS) on a project?',
      content:
        "Yes but with the modern libraries of CSS it's better to use one of them to earn time and build some really beautiful apps or webSites.",
    },
  ];

  return (
    <Fragment>
      <Accordion items={items} />;
    </Fragment>
  );
}

export default AccordionPage;
