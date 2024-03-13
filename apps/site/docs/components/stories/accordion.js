import { useState } from 'react';
import { Accordion } from '@rhino-ui/components/src/components/accordion/accordion';

export function Default() {
    const [openPanels, setOpenPanels] = useState({
        '1': false,
        '2': false,
        '3': false,
      });
      /* This logic ensures only one panel is open at a time */
      const handleTogglePanels = id => {
        const updatedPanels = { ...openPanels };
        if (updatedPanels[id]) {
          updatedPanels[id] = false;
        } else {
          Object.keys(updatedPanels).forEach(key => {
            if (updatedPanels[key]) {
              updatedPanels[key] = false;
            }
          });
          updatedPanels[id] = true;
        }
        setOpenPanels(updatedPanels);
      };
      return (
        <Accordion>
          <Accordion.Panel isOpen={openPanels['1']}>
            <Accordion.PanelSummary
              onToggle={() => handleTogglePanels('1')}
              isDetailsOpen={openPanels['1']}
            >
              What is solar energy? How do solar panels work?
            </Accordion.PanelSummary>
            <Accordion.PanelDetails gap="md">
              <p>
                Solar panels, also called photovoltaic or PV panels, consist of solar cells that are
                designed to capture the radiant light and heat contained in sunlight and convert it
                into usable clean energy for your home.
              </p>
              <p>
                When sunlight hits your solar panel, the photons of energy are converted into DC
                (direct current) electricity, which is then converted into AC (alternating current)
                electricity for use in your home. Solar panels are often grouped together to form a
                solar grid or solar array, allowing you to capture and harness the right amount of
                energy for your needs.
              </p>
            </Accordion.PanelDetails>
          </Accordion.Panel>
          <Accordion.Panel isOpen={openPanels['2']}>
            <Accordion.PanelSummary
              onToggle={() => handleTogglePanels('2')}
              isDetailsOpen={openPanels['2']}
            >
              How do I know if solar is right for me?
            </Accordion.PanelSummary>
            <Accordion.PanelDetails>
              <p>
                There are several factors we can look at to determine if solar might be a good
                solution for your needs, including roof space, home energy usage, credit health, and
                eligibility for incentives. At Rhinolabs, we start by calculating a quick savings
                estimate based on your home, location, and current utility costs. Then, we’ll
                schedule a meeting to clarify your goals, address any questions, identify purchase
                options, and outline the solar process. All of this happens before you pay, allowing
                you to decide if a solar power system is right for you based on a complete
                understanding of the potential costs and savings.
              </p>
            </Accordion.PanelDetails>
          </Accordion.Panel>
          <Accordion.Panel isOpen={openPanels['3']} borderWidth="0">
            <Accordion.PanelSummary
              onToggle={() => handleTogglePanels('3')}
              isDetailsOpen={openPanels['3']}
            >
              How many solar panels do I need?
            </Accordion.PanelSummary>
            <Accordion.PanelDetails>
              <p>
                The right solar power system for your home will depend on a variety of factors,
                including your current energy usage, the size and layout of your roof, and your
                preferred level of energy independence. To hone in on the right solution for your
                home, we always begin with a personal consultation and a survey, both of which serve
                to clarify your goals and outline available options. Should you choose to invest,
                we’ll design a custom solution to meet your goals and maximize your savings—no
                haggling, no upselling, just right.
              </p>
            </Accordion.PanelDetails>
          </Accordion.Panel>
        </Accordion>
      );
}

export function LeftCaret() {
    const [openPanels, setOpenPanels] = useState({
        '1': false,
        '2': false,
        '3': false,
      });
      /* This logic ensures only one panel is open at a time */
      const handleTogglePanels = id => {
        const updatedPanels = { ...openPanels };
        if (updatedPanels[id]) {
          updatedPanels[id] = false;
        } else {
          Object.keys(updatedPanels).forEach(key => {
            if (updatedPanels[key]) {
              updatedPanels[key] = false;
            }
          });
          updatedPanels[id] = true;
        }
        setOpenPanels(updatedPanels);
      };
      return (
        <Accordion>
          <Accordion.Panel isOpen={openPanels['1']}>
            <Accordion.PanelSummary
              hasCaret="left"
              onToggle={() => handleTogglePanels('1')}
              isDetailsOpen={openPanels['1']}
            >
              Consultation
            </Accordion.PanelSummary>
            <Accordion.PanelDetails>
              <p>
                Together, we’ll clarify your goals, address any questions, identify purchase options
                and incentives, and outline the solar process—placing you in the driver’s seat for
                everything moving forward.
              </p>
            </Accordion.PanelDetails>
          </Accordion.Panel>
          <Accordion.Panel isOpen={openPanels['2']}>
            <Accordion.PanelSummary
              hasCaret="left"
              onToggle={() => handleTogglePanels('2')}
              isDetailsOpen={openPanels['2']}
            >
              Survey &amp; Design
            </Accordion.PanelSummary>
            <Accordion.PanelDetails>
              <p>
                Our solar specialists will take a survey of your property and define specific
                requirements in your area. Then, we’ll design a solar energy system to maximize your
                savings.
              </p>
            </Accordion.PanelDetails>
          </Accordion.Panel>
          <Accordion.Panel isOpen={openPanels['3']} borderWidth="0">
            <Accordion.PanelSummary
              hasCaret="left"
              onToggle={() => handleTogglePanels('3')}
              isDetailsOpen={openPanels['3']}
            >
              Permitting
            </Accordion.PanelSummary>
            <Accordion.PanelDetails>
              <p>
                We work on your behalf to navigate state and municipal requirements, homeowners
                associations, and utility paperwork—moving your project from design to install with
                the ultimate efficiency.
              </p>
            </Accordion.PanelDetails>
          </Accordion.Panel>
        </Accordion>
      );
}

export function NoCaret() {
    const [openPanels, setOpenPanels] = useState({
        '1': false,
        '2': false,
        '3': false,
    });
    /* This logic ensures only one panel is open at a time */
    const handleTogglePanels = id => {
    const updatedPanels = { ...openPanels };
    if (updatedPanels[id]) {
        updatedPanels[id] = false;
    } else {
        Object.keys(updatedPanels).forEach(key => {
        if (updatedPanels[key]) {
            updatedPanels[key] = false;
        }
        });
        updatedPanels[id] = true;
    }
    setOpenPanels(updatedPanels);
    };
    return (
    <Accordion>
        <Accordion.Panel isOpen={openPanels['1']}>
        <Accordion.PanelSummary
            hasCaret={false}
            onToggle={() => handleTogglePanels('1')}
            isDetailsOpen={openPanels['1']}
        >
            Consultation
        </Accordion.PanelSummary>
        <Accordion.PanelDetails>
            <p>
            Together, we’ll clarify your goals, address any questions, identify purchase options
            and incentives, and outline the solar process—placing you in the driver’s seat for
            everything moving forward.
            </p>
        </Accordion.PanelDetails>
        </Accordion.Panel>
        <Accordion.Panel isOpen={openPanels['2']}>
        <Accordion.PanelSummary
            hasCaret={false}
            onToggle={() => handleTogglePanels('2')}
            isDetailsOpen={openPanels['2']}
        >
            Survey &amp; Design
        </Accordion.PanelSummary>
        <Accordion.PanelDetails>
            <p>
            Our solar specialists will take a survey of your property and define specific
            requirements in your area. Then, we’ll design a solar energy system to maximize your
            savings.
            </p>
        </Accordion.PanelDetails>
        </Accordion.Panel>
        <Accordion.Panel isOpen={openPanels['3']} borderWidth="0">
        <Accordion.PanelSummary
            hasCaret={false}
            onToggle={() => handleTogglePanels('3')}
            isDetailsOpen={openPanels['3']}
        >
            Permitting
        </Accordion.PanelSummary>
        <Accordion.PanelDetails>
            <p>
            We work on your behalf to navigate state and municipal requirements, homeowners
            associations, and utility paperwork—moving your project from design to install with
            the ultimate efficiency.
            </p>
        </Accordion.PanelDetails>
        </Accordion.Panel>
    </Accordion>
    );
}