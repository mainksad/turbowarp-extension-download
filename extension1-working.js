// This is used from the site and its edited
class StrictEqualityExtension {
  getInfo() {
    return {
      id: 'strictequality', // change this if you make an actual extension!
      name: 'Strict Equality',
      blocks: [
        {
          opcode: 'strictlyEquals',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[ONE] strictly equals [TWO]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'First value'
            },
            TWO: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Second value'
            }
          }
        },
        {
            opcode: 'pow',
            blockType: Scratch.BlockType.REPORTER,
            text: '[powONE] pow [powTWO]',
            arguments: {
              powONE: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '1'
              },
              powTWO: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '1'
              },
              
        }
      ]
    };
  }
  strictlyEquals(args) {
    // Note strict equality: Inputs must match exactly: in type, case, etc.
    return args.ONE === args.TWO;
  }
    pow(args) {
      return Math.pow(args.powONE, args.powTWO);
    }
}
Scratch.extensions.register(new StrictEqualityExtension());
