import streamlit as st
import streamlit.components.v1 as components

st.set_page_config(
    page_title="IIITDM Mess Menu",
    page_icon="🍽️",
    layout="wide",
    initial_sidebar_state="collapsed"
)

# Read index.html
with open("index.html", "r", encoding="utf-8") as f:
    html_content = f.read()

# Render HTML component with scrolling
components.html(html_content, height=1100, scrolling=True)
