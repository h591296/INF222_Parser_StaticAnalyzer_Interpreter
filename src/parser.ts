import { Token } from "./tokenizer";
import {
  AstNode,
  Identifier,
  Operator,
  PhysicalUnit,
  MeasuredNumber,
  Assignment,
  Statement,
  PrimitiveExpr,
  PhysicalUnitEnum,
  Distance,
  Time,
  Multiplicative,
  Additive,
  GroupExpr,
  Expr,
  Mass,
  Velocity,
} from "./types";

export function parseProgram(tokens: Token[]): AstNode[] {
  let currentPosition = -1;

  let AstNodes: AstNode[] = [];

  while (currentPosition < tokens.length - 1) {
    AstNodes.push(Statement());
  }

  return AstNodes;

  function getCurrentToken() {
    // 1. Return the element of array `tokens` at the current position.
    return tokens[currentPosition];
  }

  function advance(): void {
    // 1. Increment the value of `currentPosition` by 1.
    // TODO: YOUR CODE HERE
  }

  function peek() {
    // 1. Return the element of array `tokens` at a position immediately after the current position.
    // TODO: YOUR CODE HERE
  }

  function error() {
    return new Error(
      "Parsing failed at position: " +
        currentPosition +
        ". The erroneous input token is: " +
        getCurrentToken().value
    );
  }

  
  
  /*** functions for terminal symbols of the grammar ***/

  
  
  function KeywordLet(): void {
    // 1. Peek the next input token.
    // 1.1. If it is the keyword `let`, then:
    if (peek().kind === "KeywordLet") {
      // 1.1.1. Advance the position of the parser.
      advance();
    }
    // 1.2. Otherwise, i.e., if it is not a keyword `let`, report an error.
    else throw error();
  }
  
  function Equals(): void {
    // 1. Peek the next input token.
    // 1.1. If it is an equality symbol `=`, then:
    // 1.1.1. Advance the position of the parser.
    // 1.2. Otherwise, i.e., if it is not an equality sign, report an error. 

    // TODO: YOUR CODE HERE
  }

  function Semicolon(): void {
    // TODO: YOUR CODE HERE
  }

  function /* TODO: YOUR CODE HERE */(): void {
    // TODO: YOUR CODE HERE
  }

  function /* TODO: YOUR CODE HERE */(): void {
    // TODO: YOUR CODE HERE
  }


  
  /*** functions for "special" terminal symbols that also have a value (these special terminals are: `NumericalLiteral`, `Identifier` and `PhysicalUnit`) ***/


  
  function NumericalLiteral(): number {
    // 1. Peek the next input token.
    // 1.1. If it is a numeric literal, then:
    // 1.1.1. Advance the position of the parser.
    // 1.2. Otherwise, i.e., if it is not a numeric literal, report an error.
    // TODO: YOUR CODE HERE
    
    // 2. Return the numerical value of the token.
    return parseInt(/* TODO: YOUR CODE HERE */, 10);
  }
  
  function Identifier(): Identifier {
    // 1. Peek the next input token.
    // 2. If its kind is `Identifier`, then:
    if (peek().kind === "Identifier") {
      // 2.1. Advance the position of the parser.
      advance();
      // 2.2. Return an object with two properties: `name` and `nodeType`.
      return {
        // 2.2.1. The property `name` should be the value of the current token.
        // TODO: YOUR CODE HERE
        // 2.2.2. The property `nodeType` should be `Identifier`.
        nodeType: "Identifier"
      };
    }
    // 3. Throw an error otherwise (i.e., if the kind of the peek'ed token is not `Identifier`.
    throw error();
  }

  function PhysicalUnit(): PhysicalUnit {
    // 1. Advance the position of the parser.
    advance();
    // 2. Get the current token and store it in some variable.
    let unit = getCurrentToken();
    // 3. Check the kind of that token.
    // 3.1. If it is `PhysicalUnit`, then:
    if (unit.kind === "PhysicalUnit") {
      // 3.1.1. Store the value of the token in some variable.
      let unitValue = unit.value;
      // 3.1.2. If that value is one of the time units, then:
      if (["min", "s", "h"].includes(unitValue)) {
        // 3.1.2.1. Return an object with the following properties:
        return {
          // 3.1.2.1.1. Property `value` should be the value of the token, casted to type `Time`
          // TODO: YOUR CODE HERE
          // 3.1.2.1.2. Property `kind` should be `PhysicalUnitEnum.Time`
          // TODO: YOUR CODE HERE
          // 3.1.2.1.3. Property `nodeType` should be `PhysicalUnit`
          // TODO: YOUR CODE HERE
        };
      // 3.1.3. Otherwise, if that value is one of the mass units, then:
      } else if (/* TODO: YOUR CODE HERE */) {
        // 3.1.3.1. Return an object with the following properties:
        // 3.1.3.1.1. Property `value` should be the value of the token, casted to type `Mass`
        // 3.1.3.1.2. Property `kind` should be `PhysicalUnitEnum.Mass`
        // 3.1.3.1.3. Property `nodeType` should be `PhysicalUnit`

        // TODO: YOUR CODE HERE
        };
      // 3.1.4. Otherwise, if that value is one of the (???what???) units, then:
      } else if (/* TODO: YOUR CODE HERE */) {
        // TODO: YOUR CODE HERE
      } 
      // 3.1.5. Otherwise, if that value is one of the (???what???) units, then:
      else if (
        // TODO: YOUR CODE HERE
      ) {
        // TODO: YOUR CODE HERE
      }
    }
    // 3.2. Otherwise, i.e., if the kind of the token is not `PhysicalUnit`, throw an error.
    throw error();
  }



  /*** functions for non-terminal symbols of the grammar ***/


  
  function Statement(): Statement {
    // 1.1. A statement is an assignment statement.
    // 1.2. Return a corresponding AST node.
    return AssignStatement();
  }

  function AssignStatement(): Assignment {
    // 1. Expect (i.e., consume) keyword `let`.
    KeywordLet();
    // 2. Expect an identifier, and store it in a variable.
    let assignee = Identifier();
    // 3. Expect an equality symbol `=`.
    // TODO: YOUR CODE HERE
    // 4. Expect an expression, and store it in a variable.
    // TODO: YOUR CODE HERE
    // 5. Expect a semicolon.
    // TODO: YOUR CODE HERE
    // 6. Return an AST node that represents an assignment statement -- it is an object with:
    return {
      // 6.1. A property that represents the assignee (i.e., the variable that has been assigned to).
      assignee,
      // 6.2. A property that represents the expression on the right-hand side of the assignment statement.
      // TODO: YOUR CODE HERE
      // 6.3. A property `nodeType` which is (???what???).
      // TODO: YOUR CODE HERE
    };
  }

  function Expr(): Expr {
    // TODO: YOUR CODE HERE
  }

  function GroupExpr(): GroupExpr {
    // TODO: YOUR CODE HERE
  }

  function PrimitiveExpr(): PrimitiveExpr {
    // 1. Peek the next input token.
    // 2. Depending on what this token is:
    switch (peek().kind) {
      // 2.1. If it is an identifier: 
      case "Identifier":
        // 2.1.1. Expect an identifier.
        // 2.1.2. Return an AST node that represents it.
        return Identifier();
      // 2.2. If it is a number:
      case "Number":
        // 2.2.1. Expect a measured number.
        // 2.2.2. Return an AST node that represents it.
        // TODO: YOUR CODE HERE
      // 2.3. If it is a (???what???):
      case /* TODO: YOUR CODE HERE */:
        // TODO: YOUR CODE HERE
      // 2.4. Otherwise, if it is none of the above:
      default:
        // 2.4.1. Throw an error.
        throw error();
    }
  }

  function MeasuredNumber(): MeasuredNumber {
    // TODO: YOUR CODE HERE
  }

  function OpAddSub(): Operator {
    // 1. Peek the next input token.
    // 1.1. If it is either `+` or `-`, then:
    if (peek().kind == "OpAddSub") {
      // 1.1.1. Advance the position of the parser.
      // TODO: YOUR CODE HERE
    }
    // 1.2. Otherwise, i.e., if it is not `+` or `-`, report an error.
    else throw error();
    // 2. Depending on the value of the token:
    switch (getCurrentToken().value) {
      // 2.1. If it is `+`, then:
      case "+":
        // 2.1.1. Return an AST node that represents an addition-like operator -- it is an object with:
        return {
          // 2.1.1.1. A property `value` which is `+`.
          value: "+",
          // 2.1.1.2. A property `nodeType` which is `OpAddSub`.
          nodeType: "OpAddSub"
        };
      // 2.2. If it is `-`, then:
      case "-":
        // TODO: YOUR CODE HERE
      // 2.3. Otherwise, i.e., if it is neither `+` nor `-`:
      default:
        // 2.3.1. Throw an error.
        throw error();
    }
  }

  function OpMulDiv(): Operator {
    // TODO: YOUR CODE HERE
  }

  function Additive(): PrimitiveExpr | Multiplicative | Additive {
    // 1. Expect a multiplicative expression, and store it in a variable.
    let left: PrimitiveExpr | Multiplicative | Additive = Multiplicative();
    // 2. Emulate repetition in the grammar `{ ... }*` by peeking the next input token. See also item 2.2. below.
    // 2.1. Check whether that peek'ed token is `+` or `-`.
    while (peek().kind === "OpAddSub") {
      // 3. Expect (i.e., consume) that peek'ed token, and store it in a variable.
      let op = OpAddSub();
      // 4. Expect a multiplicative expression, and store it in a variable.
      let right = /* TODO: YOUR CODE HERE */;
      // 5. Update the expression stored in item 1. to be an AST node that represents an additive expression -- it is an object with: 
      left = {
        // 5.1. A property that represents the left operand of the multiplicative expression.
        left,
        // 5.2. A property that represents the operator of the multiplicative expression.
        // TODO: YOUR CODE HERE
        // 5.3. A property that represents the right operator of the multiplicative expression.
        right,
        // 5.4. A property `nodeType` which is (???what???).
        nodeType: /* TODO: YOUR CODE HERE */,
      };
    // 2.2. Make an iteration of the loop to process the possible remaining part of the multiplicative expression.
    }
    // 5.5. Return the AST node.
    return left;
  }

  function Multiplicative(): Multiplicative | PrimitiveExpr {
    // TODO: YOUR CODE HERE
  }

}
