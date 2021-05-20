"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledSystemExample = void 0;
var react_1 = require("react");
var styled_1 = require("./styled");
var StyledSystemExample = function () {
    return (<styled_1.Card bg="wheat" maxWidth="20rem" borderRadius={10} mx="auto" mt="32px">
            <styled_1.CardHeader p="16px" borderBottomWidth={1} borderBottomColor="green" borderBottomStyle="solid">
                <h2>Styled-System Example</h2>
            </styled_1.CardHeader>
            <styled_1.CardContent p="20px">
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Ab, officiis dolor eaque optio quam deserunt nesciunt
                    tempore iste unde cum eius explicabo debitis non nostrum
                    incidunt natus. Molestiae, veritatis quo.
                </p>
                <p>
                    A cupiditate quae quidem accusamus, sint dolores distinctio
                    doloribus earum culpa quas facilis repellendus soluta illo
                    provident eaque inventore sapiente molestias atque dolor
                    ipsam autem eveniet dolorem. Quibusdam, nostrum cupiditate.
                </p>
            </styled_1.CardContent>
            <styled_1.CardFooter p="24px" borderTopWidth={1} borderTopColor="green" borderTopStyle="solid" textAlign="center">
                <styled_1.Button py="8px" px="12px" bg="green" color="white" fontSize={16} fontWeight={500} borderRadius={8} href="https://styled-components.com/" target="_blank" rel="noopener noreferrer">
                    Go To Documentation
                </styled_1.Button>
            </styled_1.CardFooter>
        </styled_1.Card>);
};
exports.StyledSystemExample = StyledSystemExample;
