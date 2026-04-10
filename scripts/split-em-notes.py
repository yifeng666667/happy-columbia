"""
Split EM_Lecture_Notes.md into per-session markdown files with frontmatter.
Run: python3 scripts/split-em-notes.py
"""
import re
from pathlib import Path

SRC = Path('/Users/yifeng/Desktop/claude/EM_Lecture_Notes.md')
OUT = Path(__file__).resolve().parents[1] / 'src/content/notes/emerging-capital-markets'
OUT.mkdir(parents=True, exist_ok=True)

# Clear old generated files (keeps dir tidy between re-runs)
for f in OUT.glob('*.md'):
    f.unlink()

raw = SRC.read_text(encoding='utf-8')

# Split on "# SESSION ..." headings. parts[0] = intro, parts[1:] = sessions.
parts = re.split(r'(?m)^# SESSION ', raw)

# --- intro / overview ---
intro = parts[0].strip()
# Drop the original top-level h1 so the layout's h1 doesn't duplicate.
intro = re.sub(r'^#\s+.*\n', '', intro, count=1).strip()

(OUT / '00-overview.md').write_text(
    f'---\ntitle: "课程总览与主线剧情"\norder: 0\n---\n\n{intro}\n',
    encoding='utf-8',
)

# --- sessions ---
for i, part in enumerate(parts[1:], start=1):
    head, _, body = part.partition('\n')
    title_line = head.strip()  # e.g. "1：什么是新兴市场？历史视角"
    num_match = re.match(r'([\d\-]+)', title_line)
    session_num = num_match.group(1) if num_match else str(i)
    slug = f'{i:02d}-session-{session_num}'
    title = f'SESSION {title_line}'
    (OUT / f'{slug}.md').write_text(
        f'---\ntitle: "{title}"\norder: {i}\nsession: "{session_num}"\n---\n\n{body.strip()}\n',
        encoding='utf-8',
    )

generated = sorted(p.name for p in OUT.glob('*.md'))
print(f'Generated {len(generated)} files in {OUT}:')
for name in generated:
    print(f'  {name}')
