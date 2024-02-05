
# Kyoto docs

echo "Generating kyoto-framework/kyoto docs ..."
python3 -m docsgen -r https://github.com/kyoto-framework/kyoto.git -o ./kyoto

echo "Generating kyoto-framework/zen docs ..."
python3 -m docsgen -r https://github.com/kyoto-framework/zen.git -d agg,async,atomicx,cache,cast,conv,errorsx,fmtx,httpx,jsonx,logic,mapx,mathx,slice,templatex -o ./zen
