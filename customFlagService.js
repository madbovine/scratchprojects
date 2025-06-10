(function () {
  class CustomFlagService {
    constructor(runtime) {
      this.runtime = runtime;
      this.registerEvents();
    }

    registerEvents() {
      // Relay the main green flag to our custom hat block
      this.runtime.on('PROJECT_START', () => {
        this.runtime.startHats('customFlagService_whenCustomFlag');
      });
    }

    getInfo() {
      return {
        id: 'customFlagService',
        name: 'Events+',
        color1: '#FFD500',
        color2: '#CC9900',
        color3: '#CC9900',
        blocks: [
          {
            opcode: 'whenCustomFlag',
            blockType: Scratch.BlockType.HAT,
            text: 'when custom flag clicked'
          }
        ]
      };
    }

    whenCustomFlag() {
      return true;
    }
  }

  // Register the extension
  const customFlagService = new CustomFlagService(window.vm.runtime);
  window.vm.extensionManager._registerInternalExtension(customFlagService);
  console.log('✅ CustomFlagService injected');
})();

