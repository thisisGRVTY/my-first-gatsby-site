import React from "react"
import Section from "../element/sections/section"
import SectionOuter from "../element/sections/section-outer"

// Heading Components
import HeadingXL from "../element/headings/HeadingXL"
import HeadingL from "../element/headings/HeadingL"
import HeadingM from "../element/headings/HeadingM"
import HeadingMS from "../element/headings/HeadingMS"
import HeadingS from "../element/headings/HeadingS"
import HeadingXS from "../element/headings/HeadingXS"

// Paragraph Components
import ParagraphL from "../element/paragraphs/ParagraphL"
import ParagraphM from "../element/paragraphs/ParagraphM"
import ParagraphS from "../element/paragraphs/ParagraphS"

// List Components
import UnorderedList from "../element/lists/unordered-list"
import OrderedList from "../element/lists/ordered-list"

// Table Components
import Table from "../element/tables/table"

// Buttons Components
import Btn1 from "../element/buttons/btn-primary"
import Btn2 from "../element/buttons/btn-secondary"
import Btn3 from "../element/buttons/btn-tertiary"

// Links Components
import SimpleLink from "../element/links/simple-link"

// Colors Card Component
import DarkColors from "../element/colors/dark-colors"
import LightColors from "../element/colors/light-colors"
import MainColors from "../element/colors/main-colors"

const DesignSystem = () => {

    const headingContent = [
        { 
            id: 1, 
            xl: 'XL Heading', 
            l: 'L Heading', 
            m: 'M Heading', 
            ms: 'MS Heading', 
            s: 'S Heading', 
            xs: 'XS Heading',
        },
    ]

    const paragraphContent = [
        { 
            id: 1, 
            pL: "It was that terrifying feeling you have as you tightly hold the covers over you with the knowledge that there is something hiding under your bed. You want to look, but you don't at the same time. You're frozen with fear and unable to act. That's where she found herself and she didn't know what to do next",
            pM: "It was that terrifying feeling you have as you tightly hold the covers over you with the knowledge that there is something hiding under your bed. You want to look, but you don't at the same time. You're frozen with fear and unable to act. That's where she found herself and she didn't know what to do next",
            pS: "It was that terrifying feeling you have as you tightly hold the covers over you with the knowledge that there is something hiding under your bed. You want to look, but you don't at the same time. You're frozen with fear and unable to act. That's where she found herself and she didn't know what to do next",
           
        },
    ]

    const list = [
        { 
            id: 1, 
            ul: 'List Item 1',
        },
        { 
            id: 2, 
            ul: 'List Item 2',
        },
        { 
            id: 3, 
            ul: 'List Item 3',
        },
        { 
            id: 4, 
            ul: 'List Item 4',
        },
    ]

    const tableHeader = [
        { 
            id: 1, 
            title: 'Name',
        },
        { 
            id: 2, 
            title: 'Job',
        },
    ]

    const tableContent = [
        { 
            id: 1, 
            title: 'Hans',
            subtitle: 'Design',
        },
        { 
            id: 2, 
            title: 'Peter',
            subtitle: 'Frontend',
        },
        { 
            id: 3, 
            title: 'Gustav',
            subtitle: 'Backend',
        },
    ]

    return(
    <SectionOuter>
        <h1>Default Components</h1>
        {/* --------------------------------------------------------------------------------------------- */}
        <Section sectionName={"Headings"}>
            <div>
            <h4 style={{
                color: `rgba(0, 0, 0, 0.3)`,
                fontSize: `.7rem`,
                textTransform: `uppercase`,
                margin: `0 0 .3rem 0`,
            }}>Component</h4>
            <h1 style={{
                color: `rgba(0, 0, 0, 0.6)`,
                fontSize: `1rem`,
                textTransform: `uppercase`,
                padding: `0 0 0.5rem 0`,
                margin: `0 0 1.5rem 0`,
                borderBottom: `solid 2px rgba(0, 0, 0, 0.3)`,
            }}>Headings</h1>
            </div>

            <div style={{ display: `flex`, flexDirection: `column`, }}>
                    <h1 style={{
                    color: `rgba(0, 0, 0, 0.6)`,
                    fontSize: `1rem`,
                    }}>Large Headings</h1>
                    <HeadingXL headingContent={headingContent}/>
                    <HeadingL headingContent={headingContent}/>
                    <HeadingM headingContent={headingContent}/>
            </div>
            <div style={{ display: `flex`, flexDirection: `column`, }}>
                    <h1 style={{
                    color: `rgba(0, 0, 0, 0.6)`,
                    fontSize: `1rem`,
                    marginTop: `2rem`,
                    }}>Small Headings</h1>
                    <HeadingMS headingContent={headingContent}/>
                    <HeadingS headingContent={headingContent}/>
                    <HeadingXS headingContent={headingContent}/>
            </div>


        </Section>
        {/* --------------------------------------------------------------------------------------------- */}
        <Section sectionName={"Paragraphs"}>
            <div>
            <h4 style={{
                color: `rgba(0, 0, 0, 0.3)`,
                fontSize: `.7rem`,
                textTransform: `uppercase`,
                margin: `0 0 .3rem 0`,
            }}>Component</h4>
            <h1 style={{
                color: `rgba(0, 0, 0, 0.6)`,
                fontSize: `1rem`,
                textTransform: `uppercase`,
                padding: `0 0 0.5rem 0`,
                margin: `0 0 1.5rem 0`,
                borderBottom: `solid 2px rgba(0, 0, 0, 0.3)`,
            }}>Paragraphs</h1>
            </div>
            <div style={{ display: `flex`, flexDirection: `column`, }}>
                    <h1 style={{
                    color: `rgba(0, 0, 0, 0.6)`,
                    fontSize: `1rem`,
                    }}>Large Paragraph</h1>
                    <ParagraphL paragraphContent={paragraphContent}/>
            </div>
            <div style={{ display: `flex`, flexDirection: `column`, }}>
                    <h1 style={{
                    color: `rgba(0, 0, 0, 0.6)`,
                    fontSize: `1rem`,
                    marginTop: `2rem`,
                    }}>Medium Paragraph</h1>
                    <ParagraphM paragraphContent={paragraphContent}/>
            </div>
            <div style={{ display: `flex`, flexDirection: `column`, }}>
                    <h1 style={{
                    color: `rgba(0, 0, 0, 0.6)`,
                    fontSize: `1rem`,
                    marginTop: `2rem`,
                    }}>Small Paragraph</h1>
                    <ParagraphS paragraphContent={paragraphContent}/>
            </div>
        </Section>
        {/* --------------------------------------------------------------------------------------------- */}
        <Section sectionName={"Lists"}>
            <div>
            <h4 style={{
                color: `rgba(0, 0, 0, 0.3)`,
                fontSize: `.7rem`,
                textTransform: `uppercase`,
                margin: `0 0 .3rem 0`,
            }}>Component</h4>
            <h1 style={{
                color: `rgba(0, 0, 0, 0.6)`,
                fontSize: `1rem`,
                textTransform: `uppercase`,
                padding: `0 0 0.5rem 0`,
                margin: `0 0 1.5rem 0`,
                borderBottom: `solid 2px rgba(0, 0, 0, 0.3)`,
            }}>Lists</h1>
            </div>

            <div style={{ display: `flex`, flexDirection: `column`, }}>
                    <h1 style={{
                    color: `rgba(0, 0, 0, 0.6)`,
                    fontSize: `1rem`,
                    }}>Unordered List</h1>
                    <UnorderedList list={list}/>
            </div>
            <div style={{ display: `flex`, flexDirection: `column`, }}>
                    <h1 style={{
                    color: `rgba(0, 0, 0, 0.6)`,
                    fontSize: `1rem`,
                    marginTop: `2rem`,
                    }}>Ordered List</h1>
                    <OrderedList list={list}/>
            </div>

        </Section>
        {/* --------------------------------------------------------------------------------------------- */}
        <Section sectionName={"Table"}>
            <div>
            <h4 style={{
                color: `rgba(0, 0, 0, 0.3)`,
                fontSize: `.7rem`,
                textTransform: `uppercase`,
                margin: `0 0 .3rem 0`,
            }}>Component</h4>
            <h1 style={{
                color: `rgba(0, 0, 0, 0.6)`,
                fontSize: `1rem`,
                textTransform: `uppercase`,
                padding: `0 0 0.5rem 0`,
                margin: `0 0 1.5rem 0`,
                borderBottom: `solid 2px rgba(0, 0, 0, 0.3)`,
            }}>Table</h1>
            </div>
            <Table tableHeader={tableHeader} tableContent={tableContent}/>
        </Section>
        {/* --------------------------------------------------------------------------------------------- */}
        <Section sectionName={"Buttons"}>
            <div>
            <h4 style={{
                color: `rgba(0, 0, 0, 0.3)`,
                fontSize: `.7rem`,
                textTransform: `uppercase`,
                margin: `0 0 .3rem 0`,
            }}>Component</h4>
            <h1 style={{
                color: `rgba(0, 0, 0, 0.6)`,
                fontSize: `1rem`,
                textTransform: `uppercase`,
                padding: `0 0 0.5rem 0`,
                margin: `0 0 1.5rem 0`,
                borderBottom: `solid 2px rgba(0, 0, 0, 0.3)`,
            }}>Buttons</h1>
            </div>
            <div style={{
                display: `flex`,
                flexDirection: `column`,
            }}>
                <div style={{ display: `flex`, flexDirection: `column`, }}>
                    <h1 style={{
                    color: `rgba(0, 0, 0, 0.6)`,
                    fontSize: `1rem`,
                    }}>Primary</h1>
                    <Btn1 text="Shop Now"/>
                </div>
                <div style={{ display: `flex`, flexDirection: `column`, }}>
                    <h1 style={{
                    color: `rgba(0, 0, 0, 0.6)`,
                    fontSize: `1rem`,
                    marginTop: `2rem`,
                    }}>Secondary</h1>
                    <Btn2 text="Save"/>
                </div>
                <div style={{ display: `flex`, flexDirection: `column`, }}>
                    <h1 style={{
                    color: `rgba(0, 0, 0, 0.6)`,
                    fontSize: `1rem`,
                    marginTop: `2rem`,
                    }}>Tertiary</h1>
                    <Btn3 text="Load more..."/>
                </div>
            </div>
        </Section>
        {/* --------------------------------------------------------------------------------------------- */}
        <Section sectionName={"Links"}>
            <div>
            <h4 style={{
                color: `rgba(0, 0, 0, 0.3)`,
                fontSize: `.7rem`,
                textTransform: `uppercase`,
                margin: `0 0 .3rem 0`,
            }}>Component</h4>
            <h1 style={{
                color: `rgba(0, 0, 0, 0.6)`,
                fontSize: `1rem`,
                textTransform: `uppercase`,
                padding: `0 0 0.5rem 0`,
                margin: `0 0 1.5rem 0`,
                borderBottom: `solid 2px rgba(0, 0, 0, 0.3)`,
            }}>Links</h1>
            </div>
            <div style={{ display: `flex`, flexDirection: `column`, }}>
                    <h1 style={{
                    color: `rgba(0, 0, 0, 0.6)`,
                    fontSize: `1rem`,
                    }}>Primary</h1>
                    <SimpleLink goTo="/about" name="About" />
            </div>
            <div style={{ display: `flex`, flexDirection: `column`, }}>
                    <h1 style={{
                    color: `rgba(0, 0, 0, 0.6)`,
                    fontSize: `1rem`,
                    marginTop: `2rem`,
                    }}>Secondary</h1>
                    <SimpleLink goTo="/about" name="About" />
            </div>
        </Section>
        {/* --------------------------------------------------------------------------------------------- */}
        <Section sectionName={"Colors"}>
            <div>
            <h4 style={{
                color: `rgba(0, 0, 0, 0.3)`,
                fontSize: `.7rem`,
                textTransform: `uppercase`,
                margin: `0 0 .3rem 0`,
            }}>Component</h4>
            <h1 style={{
                color: `rgba(0, 0, 0, 0.6)`,
                fontSize: `1rem`,
                textTransform: `uppercase`,
                padding: `0 0 0.5rem 0`,
                margin: `0 0 1.5rem 0`,
                borderBottom: `solid 2px rgba(0, 0, 0, 0.3)`,
            }}>Colors</h1>
            </div>
            <div style={{ display: `flex`, flexDirection: `column`, }}>
                    <h1 style={{
                    color: `rgba(0, 0, 0, 0.6)`,
                    fontSize: `1rem`,
                    }}>Color Tones</h1>
                    <MainColors />
            </div>
            <div style={{ display: `flex`, flexDirection: `column`, }}>
                    <h1 style={{
                    color: `rgba(0, 0, 0, 0.6)`,
                    fontSize: `1rem`,
                    marginTop: `2rem`,
                    }}>Dark Tones</h1>
                    <DarkColors />
            </div>
            <div style={{ display: `flex`, flexDirection: `column`, }}>
                    <h1 style={{
                    color: `rgba(0, 0, 0, 0.6)`,
                    fontSize: `1rem`,
                    marginTop: `2rem`,
                    }}>Light Tones</h1>
                    <LightColors />
            </div>

        </Section>
    </SectionOuter>
    )
}

export default DesignSystem