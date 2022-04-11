from aiohttp import web
import aiohttp_debugtoolbar


async def handle(request):
    res = await request.json()
    print(res['act'])
    if res['act'] == 'auth':
        return web.Response(text='ok', status=200)
    elif res['act'] == 'reg':
        return web.Response(text='ok', status=200)
    elif res['act'] == 'change':
        return web.Response(text='ok', status=200)

app = web.Application()
aiohttp_debugtoolbar.setup(app)
app.add_routes([web.post('/', handle)])

if __name__ == '__main__':
    web.run_app(app)
