import { AITool } from '../types';

export const aiTools: AITool[] = [
  // 知识库/笔记类产品
  {
    id: 'kb-1',
    name: 'NotebookLM',
    logo: 'https://notebooklm.google/_/static/branding/v4/light_mode/notebook-logo.svg',
    category: '知识库/笔记',
    link: 'https://notebooklm.google.com/'
  },
  {
    id: 'kb-2',
    name: 'ima',
    logo: 'https://qbnovel.qq.com/static/353eac8f6c283745f02dddb66e7c6ec4f1c3252f8e6146d4ccd07ffaf70cfddc', // 使用 QQ 官方 Logo
    category: '知识库/笔记',
    link: 'https://ima.qq.com/'
  },
  {
    id: 'kb-3',
    name: 'Notion',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Notion-logo.svg/1024px-Notion-logo.svg.png',
    category: '知识库/笔记',
    link: 'https://www.notion.so'
  },
  {
    id: 'kb-4',
    name: 'Remio',
    logo: '/remio.svg',
    category: '知识库/笔记',
    link: 'https://www.remio.ai/'
  },
  {
    id: 'kb-5',
    name: 'Granola',
    logo: '/granola.svg',
    category: '知识库/笔记',
    link: 'https://www.granola.ai/'
  },
  {
    id: 'kb-6',
    name: 'YouMind',
    logo: '/youmind.svg',
    category: '知识库/笔记',
    link: 'https://youmind.ai/'
  },

  // AI 编程类产品
  {
    id: 'dev-1',
    name: 'Cursor',
    logo: 'https://www.cursor.com/_next/static/media/placeholder-logo.737626f1.webp', // 从 cursor.com 获取的 logo
    category: 'AI编程',
    link: 'https://www.cursor.com/'
  },
  {
    id: 'dev-2',
    name: 'Windsurf',
    logo: 'https://windsurf.com/logo/windsurf-black-symbol.svg', // 从 windsurf.com 获取的 logo
    category: 'AI编程',
    link: 'https://windsurf.com/'
  },
  {
    id: 'dev-3',
    name: 'Bolt',
    logo: 'https://mintlify.s3.us-west-1.amazonaws.com/stackblitz/logo/dark.svg', // 从 bolt.new 获取的 logo
    category: 'AI编程',
    link: 'https://bolt.new/'
  },
  {
    id: 'dev-4',
    name: 'Lovable',
    logo: '/lovable.svg',
    category: 'AI编程',
    link: 'https://lovable.dev/'
  },
  {
    id: 'ai-5', // 保留原有 GitHub Copilot
    name: 'GitHub Copilot',
    logo: 'https://avatars.githubusercontent.com/u/96936610',
    category: 'AI编程',
    link: 'https://github.com/features/copilot'
  },

  // AI 浏览器类
  {
    id: 'browser-1',
    name: 'Dia',
    logo: '/dia.svg', // 从 diabrowser.com 获取的 logo
    category: 'AI浏览器',
    link: 'https://www.diabrowser.com/'
  },
  {
    id: 'browser-2',
    name: 'Fellou',
    logo: 'https://fellou.ai/blog/favicon.png', // 从 fellou.ai 获取的 logo
    category: 'AI浏览器',
    link: 'https://fellou.ai/'
  },
  
  // 其他 AI 产品 (保留原有未明确分类的)
  {
    id: 'ai-1',
    name: 'Midjourney',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Midjourney_Emblem.png/800px-Midjourney_Emblem.png',
    category: '图像生成',
    link: 'https://www.midjourney.com'
  },
  {
    id: 'ai-2',
    name: '即梦',
    logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGwAAABsCAYAAACPZlfNAAAACXBIWXMAACE4AAAhOAFFljFgAAAF1GlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDIgNzkuYTZhNjM5NjhhLCAyMDI0LzAzLzA2LTExOjUyOjA1ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjUuMTIgKE1hY2ludG9zaCkiIHhtcDpDcmVhdGVEYXRlPSIyMDI0LTA5LTE5VDE1OjMxOjE5KzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyNC0wOS0xOVQxNTo0MTozMSswODowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyNC0wOS0xOVQxNTo0MTozMSswODowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjM3MzlmNWMtMDU5Mi00ZmQzLTg1YzktNGFjZjdjZDYwNGY1IiB4bXBNTTpEb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6MjY4YWM5OWYtODU0MS00ZDRhLThmY2YtMjJmNjdmZjAzNTI2IiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NjAyYTEyNzAtMDk2OS00OTViLTk0NmQtYjZiYTIyMWM5Mzg2Ij4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo2MDJhMTI3MC0wOTY5LTQ5NWItOTQ2ZC1iNmJhMjIxYzkzODYiIHN0RXZ0OndoZW49IjIwMjQtMDktMTlUMTU6MzE6MTkrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyNS4xMiAoTWFjaW50b3NoKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MjM3MzlmNWMtMDU5Mi00ZmQzLTg1YzktNGFjZjdjZDYwNGY1IiBzdEV2dDp3aGVuPSIyMDI0LTA5LTE5VDE1OjQxOjMxKzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjUuMTIgKE1hY2ludG9zaCkiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+DIbfkgAAEi9JREFUeNrtnXuQZNVdxz+/c+/tmdkFdpcFljcrD4EiKCEPMUZRicJWihhTWWOMWFChYiVYRSpFYTTGIlUYHokBo5FYJSIipQSxjFAhJIIBAxpwSYpAeAgBCQ8D+2R2p2933/P7+cc5t/v2nd5lp4cZht17qm71zJ0+3T33c3+/8/09zoyYGc144wzXXIIGWDMaYM1ogDXAmtEAa0YDrAHWjAZYMxpge8xIF/wdLv7p3X+uAS37IFJ8Di9TiLuSVu8KWj0wmf9n6c7wnc+8QMeDAj2gZ+FtRaBj4Q5WoDBIJXxfHuW5lPhokAhk8UKWjxMOpoBWeQi0MIQOggKTvIJjvyUJjDnlKtcg/jLbtzgMFei6Two8i/IP6JhvLw6606Bd6O5oLOzV36GYC9t9cSTW8ljLkJ6spCsXi3AfLf1f3BhWVmynfcRZdPZZS1HkSAPsVUZicwH2pLX0KRI7jGWFoKC95BQxPu32tY+RSXfO79/exrbTfoONh69jGsi0AbZrBsuLuT3f2c2k9g4yzbSl0PNYz31YLL1bCrmh72FtF97Wb4bSltozuKJHCrT8a7MU7tnA9i3mOIEbLdUrSTWzZQVignUFr/pFl7CBSfsBUx3YR3CTo6B5OPIBetolx2j7gvZ+R89xKd2bXeJcAwdjK5k9ZqmdSkuxlkLXob5YiXfXSpask4liqy0XWDYCmBWw8jgMKIAOoEYDbLev/4pinGlfIbNTSQyb8jCpSE9QX5zmiokrxOR3UQn6exawYZ8nOvCODbDdGZO9cWZ91VK9nEyh5bFMoUiwQvDFzEfE3EMgX2oC54WwMOfHmfYYLdtuLd2HzLDlHnwPfAKFo+f1zzKyp8B9PcRnPoTB1gXzDbD5WdiYOjqz20ltvaWGZT5AKwqkEMy7pFf0/k4kW2dTfgPJAYg7HEmOQNxPNMDmZWH7jXnHG3dYqustLSBTZHINpor5raA91PsDO753g8tYb1P7PJIkJ5O0fhFJ3xOlxkQDbKzrPjF2pHoPqUKrgDTFJW+HdC34pzH7MWabUd16ouqm6xJfnIN0H8dPQ7IJ5NDGwsYeMqaeFl5kwm+xlq2SdAUiR5NkZ0GyHbUfgb2M2cuovvg281uvFYrfBp5pRMc8h67Mx51a4Ox+UnemuGMQOQxJTkayA3H6EtgWTDdithH1z/8c+sxN4D8A9kwDbD4usVWMO9XjeJhk1Zkix+PS4xG3PztokbjDyTgclxhiM6TZDtCX3m761G1g7wWebICNa2GTbnxguO+n7kiS5HhcciKeKaYt1LEmgRQhk+VkLCdJDsIlJ54ktvkucO8XuL8BNs5SlIwtOhQmHhV3PJKcAHIIHaBrsC0WElsGqYsFRSCThEwOPKIFdwEXCFzfAJvjSJLT5/PxtrpkbVuS46ZU9iHXYF0zQKEwIZDqAFil+rt8Ar6UCD8lcDnwcgNsd4Fl6+Yx2+ciq18Qd9gxHSAnlPG7wCsWPnyLQck+sUGZPoXlGVyYwVscXLynuMgFB+aS+WQetCvu4P9TWXlMXgKLbnEHocdiggApiW4yGwaYZHD6hPEtJ1wFXBJyWA2wXQB703w0Zg9ZsamLo60BVk6wsNLKMkKTS8osCxu4SphqwR9msE7gj4CvNcB26hOPm8/snuI2l5bVscHRBXZYSPv2rYwKsFqHU4T55pbxr6lwK3CVwAMCbWuAVaPfbF7TPUy3NVhW9ehEeT9tAU5LasBiG1oJryJIksx4b0s4KxG+aXCdwAaB54Iy3cuBtecZxim0ewJdDWtXt7S06BZ3ECrLkzYAllDpEyxBWsVNBpiTmXF2C85Ohe854xsO7hJ4WOD5vRZYZ37+xhSK3CC3aF1Wc48K2yO4ElBWlfvSX8f6P09nwzslg1NawgWp8F0HjySwwcFTAs8IPCvhvtj9+DMcywQOFjjcIUeFeN++C2xgzKaFBQeWz3O+gnTqa1hVMQps1+DLWhHGkDVRAVaHVT+M5ZnwzgzemYJPYWMKLyewOYPnBF4Q2CIwLdAW6EloSkgFpiKgFWbs34PDgNUqrPDh+9UpWZZIujFDLgf+YhzFuuDAuvOzMFHIOjoMKY/gchsoxu1RIQ6pxLKdujxfFSKjDgl9iy6sd0kGa1JYk8R4L76GpUIvNXwq+ESRTJAUXApZIiSZDdxyYvFGAVISUjhoAr6gwuPjqNWFd4nz1JgeluUCuUZIpbVVrK5rAVgRc4x1pdi3Lka6w6qFkUVFOfT9sJiR1GgNKVEbrJlJvf++fJ3ZN8j79pclCKw7v+mph5V1QKVbLI9ufJzR4KfcCEB166uKkyELs9nr3cj1b8QNUMKtqtN6MJ9q/3UOWpsswTVsni6xVcAB+QhI1ZisLQGaeMOb4F1YHMSBM3BuOKjOKu6vvhslq653OmyhidZuhJp7zWL4MApo1SXHz3L3nqgSJwo4ZFfWVapHbwGOeAMFlaBYPIKPMVtHgnpzbuhO78PJpALMahZWxnI2SDTXXV3dnVaBljeJKLSEO1YL/7gkgc3TJU4WcOQo6+rL/Livq99U6sOGL+dKOgZqqAiIhP5ThSLqbiehi6GEUbWwTOP3rqY8a2WdUeJlyFXGc87QxPiXA4QLx431Fr7iPL+5q3JYkVch2XAslht4BVFD1CK4ACkAC1GREwtkJH4mAXOCEazRC3RFQvxUV5IaVaINr0X9QD0CHcpl1qA5oZvB3+wvfFJg2xJOTY2vEA1Oadch1dxjDpgZTsvEUkwwltGr0geFhJ5tidYlapiAiESQ4XkqIb7rIDgXpqYMxEzdElM/EBcJs5WjgLXg0tXCZTKvS7K0XWKicFq3ogLra1g7ZIcRFcQ0mE5pYZ6KhUVKZQeXDA4pz0cPagJOBIvPVRdethuh5uU2WhmoylnSPa6LLgDcNun48Cq45bVo8V/4no7xp2Y944z2TmKv0k1iIBZdodoAmreKhUnFyqoAK9YXz0k8Vz4mKmF/RWW+AYUTCgmfR6KSTGQ4SE/gnn0c507A06/VfoxF2OM89liTw1H5CMvKKwFzAGSDDX7Vw1u4ms5GgyJaYHSVw/DoKxKpWKWZIElwp8S8lImEDe6l1UKewBdXCn8CvPKGSv76MVWHwW9Wq8xl4rc82pGTMwvXfhS80j2OglKCcaNd5QDmcDZXSrfRd6kBWoTqEf7LC3/snNy1ENucFh7Y+GLlgpxQVqm7xDwG5KJx/5dKyOv3wdkAno9QXA0KEZTF20NipF2FpRotUirgdKBaXAlRAbYa8teSyedx/PgNW14Z08BOyo1Dh5ShDZK+nWi5iZVSvrKG9S2suq7ZYDEtoZQ7/ZxWrE9nu8RZ52Uwv79ZUP4Nx2fF8e8LXb1eeGBj/AYKl7dHSPhuxTWKVterGA2X0l4rgXT52Hd3OrAwZzXZX3GdLsIWq1mYVdY/eQHk8yTcCLy0GAv7khMdAod04Zerda+8AqpdpqGGrGqEK6yeq8Zl/YtvNdlfk/71cGB4LeuB/BMpl+F4ZHfFsIxYJpccMDc3WBTBuibzWoK3KjyoynmL65dWREYVXkWMlAJh4PKqsp9h8WEjlaMHHiWRi0i4o/T3fkulDqkCKxLYPw0fK2ZRipjL7Ej4PWZkiQKTuT33pJ7wrlxx1YJlCaxqXTJLxldisP4xACq+VHUDKKajY7EQv9nwh3fyInAVqVwN9FCwtuHUz1q1ZVuB31awCdi0i3X87FMmlx6wlu0+2I7j023j0G4t9VQtYA7J975LlNGusbSs0vKKQW4RAXHW/8NgtnNXuRmRfwa5jMR+CBCaJA1aSULC/s7YxCJ1XC0JlSjhees7cGa9qty1IO3bxBrXSDA1ZTj0dQWer+UWDaSEFy3PygXGM41wG4n7Min3IRTksdbSM3BMCnYx8MMWctMeA2zCvTrQwjisI1zQNlbmdQlv0e9bWKpEK9Cq6SirSfv4tVgle094s75cdzF3VUp4AxHpInY74q61jDtJmJEZC+n5GcVaAi1ZDXa1eDshEfmQyeK1fy+8S5RXBdby8NEcTq9n5kt1OGPhpg4iw0a4xJrgmJVXZDiQ9tFStCLZQ0rmTpxdg3N3krJVOgY7YvFsAnA4hJ8Xb1cY9lZJ5GyEJxbzD7csaqZDRrhChV/qwqfKzqhOTWiU0FRjjFuNsUqVqDWVqCNSVdV5sSodLMxA7EEzrpLUfQPhJVxMsbSj9aUupPWNS8Xrx/CscMjVUujt1l3cP7Oz4MDekYa1Z0dcjwrC/q6uwYxycBtumhmhCDuV3GG3b1219Ukr0IbKK9HTjZT4lblijyJcQcLXgI2AUQBbe7GeL6VIOZ3CfwHjFASH8IQ4bghBtu1ZwCaj4OrVYrMElhnctsNYUbeqait2Xk041C/8TjP1I6xqMLeN8gSmf2qp3CJOZsprblvCG0lKSMs7WYtwEerPxVg2yJBwO8KDr0diYVFUotWyRIB4+NsZ4y07a66pnsMqrrDq4qovXMt6SF05eqZRHkb5sondKIKnTBzviGHBRN9THwT8Omqfwji8n6YPsv9pEb3GXqddZouempJwDf98u/L+DqPXrXLtapcJc61Zl9ZisZ25vBA4b8Hr3ShfMbObRWKJvidYJ8HaDtfS8kqsAn4V5SLgrVE2VvOPhmODJPb465W6W1RgLnShXdZWzu+UPfNlgCyzG23yspw1C4zVwFSFhyGGoTyHcitqt5jynyK0keibC8Fyh3iHJYCwLII6H+HdqAuQXD2Qtu2i9rnXc1NSuoiWNeGNS2aMj+cwMdSqRtiFkttwO3ZRjaWG3F4NoGrlnDxkys1i+lUTHhWhCKAMvGE9CY0aDvAsB8404xyUdahMUPZziBtOhDpDhOdJ7H7bC4DtZ3BJBy7MGZEnHLF+taOLcxoD5jLrXi+hBMsqMPkWxvWI3YvxdJlJphtAUVi1zLIM+C2wD2L2s+ZliuofwhRBXIxJyqxIyDteb/71/d8M6SLBujo3zistqL8xbxc1ry6DmpeojcwRYmxG5e+BG8EeJWwVC7omD8omVKP7qaiDgfPw9iE8x5oygXfx5zJU97CyCVVk0AqAXvd6l58WQyX+Xm6cVw2M+xvzdtF6PaT06ANS1HKU7+C4EeVWysJh+by2IKrlm7v4O74ZOEdUzjHPcpQkxG7BevHSd38is6wqNtvYk5IsXOl/yQDrwaXtWAsqM+5D4Bhey6r9GoS8oaFsR3kW45sYNwP3VWW9eLCeId4iI/YDjgDOAD4gxttQsrjGDUCVNS8NQgRnMflbZvOpVpdvNZ+wxwPrGpKPsqK6dcXvZ6IxObVpUZ5EeRC12zC5E7Ppfq9ht8wN9ivK+wJHgZ2G2ZmYnYHYqpCGKlNYVVVZebRYYXQyVBK20iUGifttlsBYcGAz8P0unFz9SwDVPV39LUPAjLC1pzwmygMY95jnXowXyzJVyPHFScJq4IRw2LEYJ2KcJubXhGRvpSMqgrIIrW9dZS3NYjGzUnoJosNVejiS/94rgPWMj+fGnVXrKlVg29Ac/ieHh3rwQGF8T+EHAi/MStJJKR81FLGMY8VsPWa/grJWVCdRXF/tDWX0ZQBEB5YWzsWfWVjLjKAQbagtzuU4XtwrgAH/0YN3d+CjuXJUx3i2Aw91hSe98ZjCJhOew9ghr5Yi6fTL9gY8ClyN8ZeAw1hmxkFivAm1U1H7GZSj+6WVuE3F+l1Wg/Ws/Np8fJRYM3P9AueTyNL4VwWL0dPRE7jd4F6D5dFGtsV7fe55rcF4hdFt0F9HbV+MlZgdjck6U34Nz0/2LbBvXYapq+QlJdbOYpO8CztaROQllshYrMDZCJC2LdL7TcfjR8C3gc9g/IIp56PyHpRWf2NYaV39Wlnsn7e+OsSEadhLLGwJDB/zyHcAd5hxKiqfQHkfJlP1GppFxWjRJYZUohV7m4UtpfEg8DuYXGPe/gDv3hUyHjLcSVzQb4EzcRlL5D+47K3/tFSBe4H1GBeiPI1iVlWQPcFiZh8vK/CxI/S1PBoLm/Nog/0V5u7FuDJm7AchAC6sbcLapWJhezuwcjwMnCPGZ1X5SH89G2Twj2qALb2xCbhQlC3m+f2wjsUsiOPxRiUuzZEDlwiurWqfwHAUsjWZ5FyEJaEUxcwaTG+g0fxr+wZYMxpgzWiANcCa0QBrRgOsAdaMBlgzGmANsGY0wJrRAGuANaMB1owGWAOsGQ2wZjTAGmDNaIA1owHWAGvGEh7/DzQ4fgIsOBo7AAAAAElFTkSuQmCC',
    category: '图像生成',
    link: 'https://jimeng.jianying.com/ai-tool/home'
  },
  {
    id: 'ai-3',
    name: '可灵',
    logo: '/klingai.svg',
    category: '图像生成',
    link: 'https://app.klingai.com/cn/'
  }
];