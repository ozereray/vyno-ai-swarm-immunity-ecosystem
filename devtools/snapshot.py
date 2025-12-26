import os

# Taranacak klasörler ve dosya uzantıları
TARGET_DIRS = ['src', 'public']
EXTENSIONS = ['.js', '.jsx', '.css', '.html', '.json']
OUTPUT_FILE = 'vyno_snapshot.txt'

def generate_snapshot():
    # vyno-ecosystem ana dizinine çık (devtools'un dışı)
    base_path = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    
    with open(os.path.join(base_path, OUTPUT_FILE), 'w', encoding='utf-8') as f:
        f.write("=== VYNO AI ECOSYSTEM CODE SNAPSHOT ===\n")
        f.write(f"Directory: {base_path}\n\n")
        
        for target in TARGET_DIRS:
            target_path = os.path.join(base_path, target)
            if not os.path.exists(target_path):
                continue
                
            for root, dirs, files in os.walk(target_path):
                # node_modules taranmasın
                if 'node_modules' in dirs:
                    dirs.remove('node_modules')
                    
                for file in files:
                    if any(file.endswith(ext) for ext in EXTENSIONS):
                        full_path = os.path.join(root, file)
                        relative_path = os.path.relpath(full_path, base_path)
                        
                        f.write(f"\n--- FILE: {relative_path} ---\n")
                        try:
                            with open(full_path, 'r', encoding='utf-8') as code_file:
                                f.write(code_file.read())
                        except Exception as e:
                            f.write(f"Error reading file: {e}")
                        f.write("\n---------------------------\n")

    print(f"Snapshot başarıyla oluşturuldu: {OUTPUT_FILE}")

if __name__ == "__main__":
    generate_snapshot()