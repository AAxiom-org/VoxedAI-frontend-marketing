import { SandpackProvider, SandpackLayout, SandpackCodeEditor } from "@codesandbox/sandpack-react";
import { githubLight, atomDark } from "@codesandbox/sandpack-themes";
import { autocompletion, completionKeymap } from "@codemirror/autocomplete";
import { python } from "@codemirror/lang-python";
import { useTheme } from "../../contexts/ThemeContext";

// Define some sample code
const sampleCode = {
  python: {
    "/App.py": {
      code: `# Python Sample Code
def calculate_factorial(n):
    """Calculate the factorial of a number."""
    if n == 0 or n == 1:
        return 1
    else:
        return n * calculate_factorial(n - 1)

def main():
    number = 5
    result = calculate_factorial(number)
    print(f"The factorial of {number} is {result}")

if __name__ == "__main__":
    main()
`
    }
  }
};

export default function SandBoxDemo() {
  // State management
  const { theme } = useTheme();

  // Define available languages
  const languages = [
    {
      name: "python",
      extensions: ["py"],
      language: python()
    }
  ];
  
  // Get code based on selected language
  const files = sampleCode.python;

  // Create a custom theme that adapts to the current theme
  const customTheme = {
    ...(theme === "dark" ? atomDark : githubLight),
    colors: {
      ...(theme === "dark" ? atomDark.colors : githubLight.colors),
      surface1: theme === 'dark' ? '#212121' : '#ffffff',
      surface2: theme === 'dark' ? '#333333' : '#f5f5f5',
      surface3: theme === 'dark' ? '#404040' : '#e5e5e5',
      clickable: theme === 'dark' ? '#aaaaaa' : '#808080',
      base: theme === 'dark' ? '#ffffff' : '#000000',
      disabled: theme === 'dark' ? '#4d4d4d' : '#cccccc',
      hover: theme === 'dark' ? '#2d2d2d' : '#eaeaea',
      accent: '#6c47ff',
    }
  };

  return (
    <div className="bg-secondary backdrop-blur-lg rounded-xl shadow-adaptive border border-adaptive overflow-hidden overflow-y-auto">
      <SandpackProvider
        theme={customTheme}
        template="react"
        files={files}
        options={{
          classes: {
            "sp-wrapper": "border border-adaptive rounded-lg overflow-hidden",
            "sp-layout": "bg-background",
            "sp-tab-button": "text-adaptive hover:bg-hover",
          },
          initMode: "lazy",
        }}
      >
        <SandpackLayout className={`transition-all duration-300 ease-in-out`}>
          <SandpackCodeEditor
            showTabs={true}
            showLineNumbers={true}
            showInlineErrors={true}
            wrapContent={true}
            extensions={[autocompletion()]}
            showRunButton={false}
            extensionsKeymap={[...completionKeymap]}
            style={{ 
              transition: "height 0.3s ease-in-out, flex 0.3s ease-in-out",
            }}
            additionalLanguages={languages}
          />
        </SandpackLayout>
      </SandpackProvider>
    </div>
  );
}