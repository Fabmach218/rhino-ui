import { useState } from 'react';
import { Accordion } from '../../../../../packages/components/src/components/accordion/accordion';

export default function NoCaret() {
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