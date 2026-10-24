"""Renders COPY.json into COPY.docx, a Word file for editing the site's copy.

Run through `npm run export:copy`, which regenerates COPY.json first.

The [id] under each block is what maps the text back to a field in src/content/,
so it is styled quiet but kept visible and selectable. Edit the prose in Word,
leave the ids alone, and send the file back.
"""

import json
import pathlib

from docx import Document
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.shared import Pt, RGBColor

ROOT = pathlib.Path(__file__).resolve().parent.parent
MUTED = RGBColor(0x6D, 0x81, 0x96)
ID_COLOR = RGBColor(0x9A, 0x3D, 0x1F)


def style_body(doc):
    """Readable defaults: Word's 11pt Calibri at full width is hard to edit prose in."""
    normal = doc.styles["Normal"]
    normal.font.name = "Calibri"
    normal.font.size = Pt(11)
    normal.paragraph_format.space_after = Pt(8)
    normal.paragraph_format.line_spacing = 1.15


def add_id(doc, ident):
    p = doc.add_paragraph()
    p.paragraph_format.space_after = Pt(2)
    p.paragraph_format.space_before = Pt(6)
    run = p.add_run(f"[{ident}]")
    run.font.name = "Consolas"
    run.font.size = Pt(8)
    run.font.color.rgb = ID_COLOR
    return p


def add_rule(doc):
    p = doc.add_paragraph()
    p.paragraph_format.space_before = Pt(10)
    p.paragraph_format.space_after = Pt(10)
    run = p.add_run("•  •  •")
    run.font.size = Pt(9)
    run.font.color.rgb = MUTED
    p.alignment = WD_ALIGN_PARAGRAPH.CENTER


def main():
    model = json.loads((ROOT / "COPY.json").read_text(encoding="utf-8"))
    doc = Document()
    style_body(doc)

    for block in model:
        kind = block["kind"]

        if kind == "title":
            doc.add_heading(block["text"], level=0)

        elif kind == "h1":
            doc.add_heading(block["text"], level=1)

        elif kind == "h2":
            doc.add_heading(block["text"], level=2)

        elif kind == "h3":
            doc.add_heading(block["text"], level=3)

        elif kind == "note":
            p = doc.add_paragraph()
            run = p.add_run(block["text"])
            run.italic = True
            run.font.size = Pt(9)
            run.font.color.rgb = MUTED

        elif kind == "para":
            doc.add_paragraph(block["text"])

        elif kind == "quote":
            p = doc.add_paragraph(block["text"], style="Intense Quote")

        elif kind == "field":
            p = doc.add_paragraph()
            p.paragraph_format.space_after = Pt(0)
            p.paragraph_format.space_before = Pt(10)
            run = p.add_run(block["label"])
            run.bold = True
            add_id(doc, block["id"])

        elif kind == "inline":
            p = doc.add_paragraph()
            p.paragraph_format.space_after = Pt(4)
            tag = p.add_run(f"[{block['id']}]  ")
            tag.font.name = "Consolas"
            tag.font.size = Pt(8)
            tag.font.color.rgb = ID_COLOR
            p.add_run(block["text"])

        elif kind == "bullets":
            for item in block["items"]:
                p = doc.add_paragraph(style="List Bullet")
                if item.get("lead"):
                    p.add_run(item["lead"]).bold = True
                    p.add_run(" ")
                p.add_run(item["text"])

        elif kind == "numbered":
            for item in block["items"]:
                doc.add_paragraph(item, style="List Number")

        elif kind == "rule":
            add_rule(doc)

    out = ROOT / "COPY.docx"
    doc.save(out)
    print(f"Wrote {out.name} ({len(model)} blocks)")


if __name__ == "__main__":
    main()
